import React, { useState, useEffect, useCallback } from 'react';
import EventCard from "../EventCard";
import { Container, PaginationContainer, PageButton } from "./styled";
import { GatherizeEvent } from '@/types/event';
import { useSubscription } from '@/contexts/SubscriptionContext';

interface EventCardContainerProps {
    events: GatherizeEvent[];
    isAdmin: boolean;
    onEventUpdated: (updatedEvent: GatherizeEvent) => void;
}

export default function EventCardContainer({ events, isAdmin, onEventUpdated }: EventCardContainerProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(8);
    const [sortedEvents, setSortedEvents] = useState<GatherizeEvent[]>([]);
    const { isSubscribed } = useSubscription();

    const sortEvents = useCallback((eventsToSort: GatherizeEvent[]) => {
        return [...eventsToSort].sort((a, b) => {
            const aSubscribed = isSubscribed(a.id);
            const bSubscribed = isSubscribed(b.id);
            if (aSubscribed && !bSubscribed) return -1;
            if (!aSubscribed && bSubscribed) return 1;
            return 0;
        });
    }, [isSubscribed]);

    useEffect(() => {
        setSortedEvents(sortEvents(events));
    }, [events, sortEvents]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setEventsPerPage(4);
            } else if (window.innerWidth < 1024) {
                setEventsPerPage(6);
            } else {
                setEventsPerPage(8);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleEventUpdated = (updatedEvent: GatherizeEvent) => {
        const updatedEvents = sortedEvents.map(event => 
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setSortedEvents(sortEvents(updatedEvents));
        onEventUpdated(updatedEvent);
    };

    return (
        <>
            <Container>
                {currentEvents.length > 0 ? (
                    currentEvents.map((event) => (
                        <EventCard 
                            key={event.id} 
                            event={event} 
                            isAdmin={isAdmin} 
                            onEventUpdated={handleEventUpdated}
                        />
                    ))
                ) : (
                    <div>No events available</div>
                )}
            </Container>
            {totalPages > 1 && (
                <PaginationContainer>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <PageButton
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            $isActive={currentPage === i + 1}
                        >
                            {i + 1}
                        </PageButton>
                    ))}
                </PaginationContainer>
            )}
        </>
    );
}