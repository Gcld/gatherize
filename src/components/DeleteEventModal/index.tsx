import React from 'react';
import { LuX } from "react-icons/lu";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    ButtonContainer,
    CancelButton,
    DeleteButton
} from './styled';

interface DeleteEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteEventModal: React.FC<DeleteEventModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this event? This action cannot be undone.</p>
                <ButtonContainer>
                    <CancelButton onClick={onClose}>Cancel</CancelButton>
                    <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
                </ButtonContainer>
            </ModalContent>
        </ModalOverlay>
    );
};

export default DeleteEventModal;