import React, { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { Container } from "./styled";
import SortModal from '../SortModal';

export default function EventsFrame() {
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const sortButtonRef = useRef<HTMLDivElement>(null);

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
                <h5>24</h5>
            </div>
            <div 
                ref={sortButtonRef}
                className="sortButton" 
                onClick={toggleSortModal}
                style={{ position: 'relative' }} 
            >
                <h3>Sort by</h3>
                <MdArrowDropDown className="icon"/>
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