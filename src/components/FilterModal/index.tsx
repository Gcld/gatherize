import React from 'react';
import { LuCalendar, LuUsers, LuClipboardList, LuX } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton, ClearFilterButton } from './styled';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFilter: (filterType: 'upcoming' | 'availableSpots' | 'myEvents' | null) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onFilter }) => {
    if (!isOpen) return null;

    const handleFilter = (filterType: 'upcoming' | 'availableSpots' | 'myEvents' | null) => {
        onFilter(filterType);
        onClose();
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className='buttons'>
                    <ModalButton onClick={() => handleFilter('upcoming')}>
                        <LuCalendar className='icon'/>
                        <span>Upcoming Events</span>
                    </ModalButton>
                    <ModalButton onClick={() => handleFilter('availableSpots')}>
                        <LuUsers className='icon'/>
                        <span>Available Spots</span>
                    </ModalButton>
                    <ModalButton onClick={() => handleFilter('myEvents')}>
                        <LuClipboardList className='icon'/>
                        <span>My Events</span>
                    </ModalButton>
                    <ClearFilterButton onClick={() => handleFilter(null)}>
                        <LuX className='icon'/>
                        <span>Clear Filters</span>
                    </ClearFilterButton>
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default FilterModal;