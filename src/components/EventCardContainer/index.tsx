import React from 'react';
import EventCard from "../EventCard";
import { Container } from "./styled";
import { GatherizeEvent } from '@/types/event';

interface EventCardContainerProps {
    events: GatherizeEvent[];
    isAdmin: boolean;
}

export default function EventCardContainer({ events, isAdmin }: EventCardContainerProps) {
    return (
        <Container>
            {events && events.length > 0 ? (
                events.map((event) => (
                    <EventCard key={event.id} event={event} isAdmin={isAdmin} />
                ))
            ) : (
                <div>No events available</div>
            )}
        </Container>
    );
}