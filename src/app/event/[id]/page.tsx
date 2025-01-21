'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX, LuClipboardPen, LuTrash2, LuUsers } from "react-icons/lu";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Link from 'next/link';
import { Event } from '@/types/event';
import { SessionProvider, useSession } from "next-auth/react";
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
    ViewParticipantsButton,
    UserInfoContainer
} from "./styled";
import { useRouter } from 'next/navigation';

export function EventDetail() {
    const { data: session, status } = useSession();
    const params = useParams();
    const router = useRouter();
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
        if (status === "authenticated") {
            toggleSubscription(eventId);
        } else {
            router.push('/login');
        }
    };
    const handleEditClick = () => {
        console.log('Edit event clicked');
    };

    const handleDeleteClick = () => {
        console.log('Delete event clicked');
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }

    const renderUserInfo = () => {
        switch (status) {
            case "authenticated":
                return session?.user ? (
                    <>
                        <h2>User Information:</h2>
                        <p>Name: {session.user.name}</p>
                        <p>Email: {session.user.email}</p>
                        <p>Role: {session.user.role}</p>
                    </>
                ) : null;
            case "loading":
                return <p>Loading user information...</p>;
            case "unauthenticated":
            default:
                return (
                    <>
                        <h2>Not Logged In</h2>
                        <p>Please <Link href="/login">log in</Link> to see your user information and interact with events.</p>
                    </>
                );
        }
    };


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
            <EventDescriptionAndButtonDiv $isSubscribed={eventSubscribed}>
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
            <UserInfoContainer>
                {renderUserInfo()}
            </UserInfoContainer>
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