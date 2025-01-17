import React, { useEffect, useState } from 'react';
import EventCard from "../EventCard";
import EventCardAdmin from "../EventCardAdmin";
import { Container } from "./styled";
import { useSession } from "next-auth/react";
import { fetchEvents } from '@/utils/api';

interface EventCardContainerProps {
    isAdmin: boolean;
}

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    maxPeople: number;
    participants: number;
}

export default function EventCardContainer({ isAdmin }: EventCardContainerProps) {
    const { data: session, status } = useSession();
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadEvents() {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Failed to load events:', error);
                setError('Failed to load events. Please try again later.');
            }
        }
        loadEvents();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (status === "loading") {
        return <div>Loading...</div>;
    }


    return (
        <Container>
            {session && session.user && (
                <div>
                    <h2>User Information:</h2>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                </div>
            )}
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </Container>
    );
}