'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX, LuClipboardPen, LuTrash2, LuUsers, LuCircleAlert } from "react-icons/lu";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Link from 'next/link';
import { GatherizeEvent } from '@/types/event';
import { SessionProvider, useSession } from "next-auth/react";
import Header from "@/components/Header";
import { deleteEvent, fetchEventById } from '@/utils/api';
import {
    Container,
    EventButton,
    EventButtonsDiv,
    EventDateAndLocationDiv,
    EventDescriptionAndButtonDiv,
    EventDescriptionDiv,
    EventPicture,
    SubscribeButton,
    TextBlock,
    TitleAndDescriptionDiv,
    DesktopOnly,
    EventContent,
    DashboardContainer,
    DashboardItem,
    ViewParticipantsButton,
    UnavailableButton
} from "./styled";
import { useRouter } from 'next/navigation';
import EditEventModal from '@/components/EditEventModal';
import DeleteEventModal from '@/components/DeleteEventModal';
import { toast } from 'react-toastify';

export function EventDetail() {
    const { data: session, status } = useSession();
    const params = useParams();
    const router = useRouter();
    const [event, setEvent] = useState<GatherizeEvent | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { toggleSubscription, isSubscribed } = useSubscription();
    const eventId = typeof params.id === 'string' ? parseInt(params.id) : -1;
    const eventSubscribed = isSubscribed(eventId);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    useEffect(() => {
        async function loadEvent() {
            if (eventId !== -1) {
                try {
                    const eventData = await fetchEventById(eventId);
                    setEvent(eventData);
                } catch (error) {
                    console.error('Error loading event:', error);
                    setError('Failed to load event. Please try again later.');
                }
            }
        }
        loadEvent();
    }, [eventId]);

    const handleSubscribe = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        if (status === "authenticated") {
            toggleSubscription(eventId);
            if (eventSubscribed) {
                toast.success('Successfully unsubscribed from the event!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.success('Successfully subscribed to the event!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } else {
            router.push('/login');
        }
    };
    const handleEditEvent = () => {
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    const handleEventUpdated = (updatedEvent: GatherizeEvent) => {
        setEvent(updatedEvent);
        toast.success('Event updated successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleConfirmDelete = async () => {
        try {
            await deleteEvent(eventId);
            toast.success('Event deleted successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            router.push('/');
        } catch (error) {
            console.error('Failed to delete event:', error);
            toast.error('Failed to delete event. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setIsDeleteModalOpen(false);
    };


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }


    const eventDate = new Date(event.date);
    const isPastEvent = eventDate < new Date();
    const isFullyBooked = event.participants >= event.maxPeople;
    const isUnavailable = isPastEvent || isFullyBooked;
    const isEventCreator = session?.user.id === event.creatorId;

    return (
        <Container>
            <DesktopOnly>
                <Header />
            </DesktopOnly>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref><EventButton><LuArrowLeft className="icon" /></EventButton></Link>
                    <div className='spacer'>
                        {isEventCreator && (
                            <>
                                <EventButton onClick={handleEditEvent}>
                                    <LuClipboardPen className="icon" />
                                    <h3>Edit Event</h3>
                                </EventButton>
                                <EventButton onClick={handleDeleteClick}>
                                    <LuTrash2 className="icon" />
                                    <h3>Delete Event</h3>
                                </EventButton>
                            </>
                        )}
                        <EventButton><LuShare className="icon" /></EventButton>
                    </div>
                </EventButtonsDiv>
            </EventPicture>
            <EventContent>
                <TitleAndDescriptionDiv>
                    <h1>{event.name}</h1>
                    <h4>{event.description}</h4>
                </TitleAndDescriptionDiv>
                <EventDateAndLocationDiv>
                    <TextBlock>
                        <h5>Date:</h5>
                        <h6>{eventDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</h6>
                        <h6>{eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</h6>
                    </TextBlock>
                    <TextBlock>
                        <h5>Location:</h5>
                        <h6>{event.address}</h6>
                        <h6>{`${event.city}, ${event.state}`}</h6>
                    </TextBlock>
                </EventDateAndLocationDiv>
            </EventContent>
            <EventDescriptionAndButtonDiv $isSubscribed={eventSubscribed} $isUnavailable={isUnavailable}>
                <EventDescriptionDiv>
                    <TextBlock>
                        <h4>About event</h4>
                        <h6>{event.description}</h6>
                    </TextBlock>
                    {isEventCreator && (
                        <DashboardContainer>
                            <DashboardItem>
                                <h4>Subscribed participants:</h4>
                                <p>{event.participants}</p>
                            </DashboardItem>
                            <DashboardItem>
                                <h4>Maximum capacity:</h4>
                                <p>{event.maxPeople}</p>
                            </DashboardItem>
                        </DashboardContainer>
                    )}
                </EventDescriptionDiv>
                {isEventCreator ? (
                    <Link href={`/event/${event.id}/admin/participants`} passHref style={{ textDecoration: 'none' }}>
                        <ViewParticipantsButton>
                            <LuUsers className='participantsIcon' />
                            <h1>View Participants</h1>
                        </ViewParticipantsButton>
                    </Link>
                ) : isUnavailable ? (
                    <UnavailableButton>
                        <LuCircleAlert className="subscribeIcon" />
                        <h1>{isPastEvent ? 'Past Event' : 'Fully Booked'}</h1>
                    </UnavailableButton>
                ) : (
                    <SubscribeButton
                        $isSubscribed={eventSubscribed}
                        onClick={handleSubscribe}
                        $disabled={status !== "authenticated"}
                    >
                        {status === "authenticated" ? (
                            eventSubscribed ? (
                                <LuX className="subscribeIcon" />
                            ) : (
                                <LuCircleCheck className="subscribeIcon" />
                            )
                        ) : (
                            <LuCircleCheck className="subscribeIcon" />
                        )}
                        <h1>
                            {status === "authenticated"
                                ? (eventSubscribed ? 'Cancel Subscription' : 'Subscribe')
                                : 'Log in to Subscribe'}
                        </h1>
                    </SubscribeButton>
                )}
            </EventDescriptionAndButtonDiv>
            <EditEventModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                eventData={event}
                onEventUpdated={handleEventUpdated}
            />
            <DeleteEventModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </Container>
    )
}

export default function EventDetailWrapper() {
    return (
        <SessionProvider>
            <EventDetail />
        </SessionProvider>
    );
}