import React from 'react';
import { LuCalendar, LuMapPin, LuClipboardList } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton } from './styled';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className='buttons'>
                    <ModalButton>
                        <LuCalendar className='icon'/>
                        <span>Date</span>
                    </ModalButton>
                    <ModalButton>
                        <LuMapPin className='icon'/>
                        <span>Location</span>
                    </ModalButton>
                    <ModalButton>
                        <LuClipboardList className='icon'/>
                        <span>My events</span>
                    </ModalButton>
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default FilterModal;