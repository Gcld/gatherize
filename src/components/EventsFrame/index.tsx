import React, { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { Container } from "./styled";
import SortModal from '../SortModal';
import { fetchEvents } from '@/utils/api';

export default function EventsFrame() {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const [eventCount, setEventCount] = useState(0);
    const sortButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function loadEventCount() {
            try {
                const events = await fetchEvents();
                setEventCount(events.length);
            } catch (error) {
                console.error('Failed to load event count:', error);
            }
        }
        loadEventCount();
    }, []);
    const toggleSortModal = () => {
        setIsSortModalOpen(!isSortModalOpen);
    };

    const handleSort = (sortType: 'alphabetical' | 'recent' | 'participants') => {
        // Implementação futura da lógica de ordenação
        console.log('Sorting by:', sortType);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sortButtonRef.current &&
                !sortButtonRef.current.contains(event.target as Node)
            ) {
                setIsSortModalOpen(false);
            }
        };

        if (isSortModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSortModalOpen]);

    return (
        <Container>
            <div className="availableEvents">
                <h2>Available Events</h2>
                <h5>{eventCount}</h5>
            </div>
            <div
                ref={sortButtonRef}
                className="sortButton"
                onClick={toggleSortModal}
                style={{ position: 'relative' }}
            >
                <h3>Sort by</h3>
                <MdArrowDropDown className="icon" />
                {isSortModalOpen && (
                    <SortModal
                        isOpen={true}
                        onClose={() => setIsSortModalOpen(false)}
                        onSort={handleSort}
                    />
                )}
            </div>
        </Container>
    );
}