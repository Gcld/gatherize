'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX } from "react-icons/lu";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Link from 'next/link';
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
    EventContent
} from "./styled";

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    address: string;
    city: string;
    state: string;
    maxPeople: number;
    participants: number;
}

export default function EventDetail() {
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

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }

    const eventDate = new Date(event.date);

    return (
        <Container>
            <DesktopOnly>
                <Header />
            </DesktopOnly>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref><EventButton><LuArrowLeft className="icon" /></EventButton></Link>
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
                </EventDescriptionDiv>
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
            </EventDescriptionAndButtonDiv>
        </Container>
    )
}