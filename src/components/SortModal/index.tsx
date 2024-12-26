import React from 'react';
import { LuAlignLeft, LuClock, LuUsers } from "react-icons/lu";
import { ModalButton, ModalContainer, ModalContent } from './styled';

interface SortModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSort: (sortType: 'alphabetical' | 'recent' | 'participants') => void;
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, onClose, onSort }) => {
    if (!isOpen) return null;

    const handleSort = (sortType: 'alphabetical' | 'recent' | 'participants') => {
        onSort(sortType);
        onClose();
    };

    return (
        <ModalContainer>
            <ModalContent>
                <ModalButton onClick={() => handleSort('alphabetical')}>
                    <LuAlignLeft className='icon'/>
                    <span>Alphabetical</span>
                </ModalButton>
                <ModalButton onClick={() => handleSort('recent')}>
                    <LuClock className='icon'/>
                    <span>Recently Created</span>
                </ModalButton>
                <ModalButton onClick={() => handleSort('participants')}>
                    <LuUsers className='icon'/>
                    <span>Participants</span>
                </ModalButton>
            </ModalContent>
        </ModalContainer>
    );
};

export default SortModal;