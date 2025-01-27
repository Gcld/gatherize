import React, { useState, useRef } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { Container } from "./styled";
import SortModal from '../SortModal';
import { GatherizeEvent } from '@/types/event';

interface EventsFrameProps {
    events: GatherizeEvent[];
    setEvents: React.Dispatch<React.SetStateAction<GatherizeEvent[]>>;
}

export default function EventsFrame({ events, setEvents }: EventsFrameProps) {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState<'alphabetical' | 'recent' | 'participants'>('recent');
    const sortButtonRef = useRef<HTMLDivElement>(null);

    const toggleSortModal = () => {
        setIsSortModalOpen(!isSortModalOpen);
    };

    const handleSort = (sortType: 'alphabetical' | 'recent' | 'participants') => {
        let sorted: GatherizeEvent[];
        switch (sortType) {
            case 'alphabetical':
                sorted = [...events].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'recent':
                sorted = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                break;
            case 'participants':
                sorted = [...events].sort((a, b) => b.participants.length - a.participants.length);
                break;
            default:
                sorted = events;
        }
        setEvents(sorted);
        setCurrentSort(sortType);
        setIsSortModalOpen(false);
    };

    return (
        <Container>
            <div className="availableEvents">
                <h2>Available Events</h2>
                <h5>{events.length}</h5>
            </div>
            <div
                ref={sortButtonRef}
                className="sortButton"
                onClick={toggleSortModal}
                style={{ position: 'relative' }}
            >
                <h3>Sort by: {currentSort}</h3>
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