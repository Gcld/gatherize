'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX, LuClipboardPen, LuTrash2, LuUsers, LuCircleAlert, LuTrendingUp, LuPercent, LuCalendarClock, LuActivity } from "react-icons/lu";
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
    UnavailableButton,
    DashboardTitle
} from "./styled";
import { useRouter } from 'next/navigation';
import EditEventModal from '@/components/EditEventModal';
import DeleteEventModal from '@/components/DeleteEventModal';
import ShareModal from '@/components/ShareModal';
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
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [shareCount, setShareCount] = useState(0);

    useEffect(() => {
        if (event) {
            setShareCount(event.shareCount);
        }
    }, [event]);

    const handleShare = () => {
        setShareCount(prevCount => prevCount + 1);
    };


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

    const handleSubscribe = async (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        if (status === "authenticated" && event) {
            try {
                const updatedEvent = await toggleSubscription(event);
                setEvent(updatedEvent);
                if (eventSubscribed) {
                    toast.success('Successfully unsubscribed from the event!');
                } else {
                    toast.success('Successfully subscribed to the event!');
                }
            } catch (error) {
                console.error('Failed to update subscription:', error);
                toast.error('Failed to update subscription. Please try again.');
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

    const handleShareClick = () => {
        setIsShareModalOpen(true);
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
    const isFullyBooked = event.participants.length >= event.maxPeople;
    const isUnavailable = isPastEvent || isFullyBooked;
    const isEventCreator = session?.user.id === event.creatorId;

    const calculateDailySubscriptionRate = () => {
        if (!event) return { rate: 0, trend: 0 };
        const creationDate = new Date(event.date);
        const currentDate = new Date();
        const daysSinceCreation = Math.max(1, Math.ceil((currentDate.getTime() - creationDate.getTime()) / (1000 * 3600 * 24)));
        const rate = event.participants.length / daysSinceCreation;
        
        return {
            rate: rate.toFixed(2),
            trend: rate > 1 ? 'high' : rate > 0.5 ? 'medium' : 'low'
        };
    };

    const calculateEventMetrics = () => {
        if (!event) return {
            occupancyRate: 0,
            daysUntilEvent: 0,
            registrationProgress: 0,
            isNearingCapacity: false
        };

        const occupancyRate = (event.participants.length / event.maxPeople) * 100;
        const daysUntilEvent = Math.ceil((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
        const registrationProgress = (event.participants.length / event.maxPeople) * 100;
        const isNearingCapacity = occupancyRate >= 80;

        return {
            occupancyRate: occupancyRate.toFixed(2),
            daysUntilEvent,
            registrationProgress: registrationProgress.toFixed(2),
            isNearingCapacity
        };
    };

    const getEngagementScore = () => {
        if (!event) return { score: 0, level: 'low' };
        
        const shareWeight = 0.3;
        const participationWeight = 0.7;
        
        const shareScore = (event.shareCount / 100) * shareWeight;
        const participationScore = (event.participants.length / event.maxPeople) * participationWeight;
        const totalScore = (shareScore + participationScore) * 100;

        return {
            score: totalScore.toFixed(2),
            level: totalScore > 70 ? 'high' : totalScore > 40 ? 'medium' : 'low'
        };
    };

    const metrics = calculateEventMetrics();
    const subscriptionRate = calculateDailySubscriptionRate();
    const engagement = getEngagementScore();


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
                        <EventButton onClick={handleShareClick}>
                            <LuShare className="icon" />
                            <h3>Share</h3>
                        </EventButton>
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
                        <>
                            <DashboardTitle>Event metrics</DashboardTitle>
                            <DashboardContainer>
                                <DashboardItem $highlight={event.participants.length === event.maxPeople}>
                                    <LuUsers className="dashboardIcon" />
                                    <h4>Subscribed Participants</h4>
                                    <p>{event.participants.length} / {event.maxPeople}</p>
                                    <span>{metrics.registrationProgress}% full</span>
                                </DashboardItem>

                                <DashboardItem>
                                    <LuTrendingUp className="dashboardIcon" />
                                    <h4>Daily subsciption rate</h4>
                                    <p>{subscriptionRate.rate} Subscription/day</p>
                                    <span>Tendency: {subscriptionRate.trend}</span>
                                </DashboardItem>

                                <DashboardItem $highlight={metrics.isNearingCapacity}>
                                    <LuPercent className="dashboardIcon" />
                                    <h4>Ocuppation Rate</h4>
                                    <p>{metrics.occupancyRate}%</p>
                                    <span>{metrics.isNearingCapacity ? 'Almost full!' : 'Vacancys available'}</span>
                                </DashboardItem>

                                <DashboardItem>
                                    <LuCalendarClock className="dashboardIcon" />
                                    <h4>Days until event</h4>
                                    <p>{metrics.daysUntilEvent} days</p>
                                    <span>{metrics.daysUntilEvent <= 7 ? 'Next!' : 'Soon'}</span>
                                </DashboardItem>

                                <DashboardItem>
                                    <LuActivity className="dashboardIcon" />
                                    <h4>Engagement</h4>
                                    <p>{engagement.score}%</p>
                                    <span>Level: {engagement.level}</span>
                                </DashboardItem>

                                <DashboardItem>
                                    <LuShare className="dashboardIcon" />
                                    <h4>Shares</h4>
                                    <p>{shareCount}</p>
                                    <span>Expanded reach</span>
                                </DashboardItem>
                            </DashboardContainer>
                        </>
                    )}
                </EventDescriptionDiv>
                {isEventCreator ? (
                    <Link href={`/event/${event.id}/participants`} passHref style={{ textDecoration: 'none' }}>
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
            <ShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                eventUrl={`${window.location.origin}/event/${event.id}`}
                eventName={event.name}
                eventId={event.id}
                onShare={handleShare}
            />
        </Container>
    );
}
export default function EventDetailWrapper() {
    return (
        <SessionProvider>
            <EventDetail />
        </SessionProvider>
    );
}