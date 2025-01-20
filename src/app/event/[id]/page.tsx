'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX, LuClipboardPen, LuTrash2, LuUsers } from "react-icons/lu";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Link from 'next/link';
import { Event } from '@/types/event';
import { useSession } from "next-auth/react";
import Header from "@/components/Header";
import { fetchEventById } from '@/utils/api';
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
    ViewParticipantsButton
} from "./styled";

export default function EventDetail() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: session, status } = useSession();
    const params = useParams();
    const [event, setEvent] = useState<Event | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { toggleSubscription, isSubscribed } = useSubscription();
    const eventId = typeof params.id === 'string' ? parseInt(params.id) : -1;
    const eventSubscribed = isSubscribed(eventId);

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
        toggleSubscription(eventId);
    };

    const handleEditClick = () => {
        // Implementação futura para editar o evento
        console.log('Edit event clicked');
    };

    const handleDeleteClick = () => {
        // Implementação futura para deletar o evento
        console.log('Delete event clicked');
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }

    const eventDate = new Date(event.date);
    const isEventCreator = session?.user.id === event.creatorId;

    return (
        <Container>
            <DesktopOnly>
                <Header />
            </DesktopOnly>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref><EventButton><LuArrowLeft className="icon" /></EventButton></Link>
                    {isEventCreator && (
                        <>
                            <EventButton onClick={handleEditClick}>
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
                        <h6>{eventDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h6>
                        <h6>{eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</h6>
                    </TextBlock>
                    <TextBlock>
                        <h5>Location:</h5>
                        <h6>{event.address}</h6>
                        <h6>{`${event.city}, ${event.state}`}</h6>
                    </TextBlock>
                </EventDateAndLocationDiv>
            </EventContent>
            <EventDescriptionAndButtonDiv $isSubscribed={eventSubscribed} onClick={(e) => handleSubscribe(e)}>
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
                ) : (
                    <SubscribeButton
                        $isSubscribed={eventSubscribed}
                        onClick={(e) => handleSubscribe(e)}
                    >
                        {eventSubscribed ? (
                            <LuX className="subscribeIcon" />
                        ) : (
                            <LuCircleCheck className="subscribeIcon" />
                        )}
                        <h1>{eventSubscribed ? 'Cancel Subscription' : 'Subscribe'}</h1>
                    </SubscribeButton>
                )}
            </EventDescriptionAndButtonDiv>
        </Container>
    )
}