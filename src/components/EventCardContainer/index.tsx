import React, { useState, useEffect } from 'react';
import EventCard from "../EventCard";
import { Container, PaginationContainer, PageButton } from "./styled";
import { GatherizeEvent } from '@/types/event';

interface EventCardContainerProps {
    events: GatherizeEvent[];
    isAdmin: boolean;
}

export default function EventCardContainer({ events, isAdmin }: EventCardContainerProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage, setEventsPerPage] = useState(8);

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

    useEffect(() => {
        setCurrentPage(1);
    }, [events]);

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    const totalPages = Math.ceil(events.length / eventsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <>
            <Container>
                {currentEvents.length > 0 ? (
                    currentEvents.map((event) => (
                        <EventCard key={event.id} event={event} isAdmin={isAdmin} />
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