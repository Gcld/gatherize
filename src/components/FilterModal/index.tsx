import React from 'react';
import { LuCalendar, LuUsers, LuClipboardList } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton } from './styled';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFilter: (filterType: 'upcoming' | 'availableSpots' | 'myEvents') => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onFilter }) => {
    if (!isOpen) return null;

    const handleFilter = (filterType: 'upcoming' | 'availableSpots' | 'myEvents') => {
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
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default FilterModal;