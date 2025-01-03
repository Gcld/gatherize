import React from 'react';
import { LuUser, LuSettings, LuX } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton } from './styled';
import Link from 'next/link';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <LuX className="closeIcon" onClick={onClose}/>
                <Link href={'/profile'}><ModalButton>
                    <LuUser className='icon'/>
                    <span>Profile</span>
                </ModalButton>
                </Link>
                <ModalButton>
                    <LuSettings className='icon'/>
                    <span>Settings</span>
                </ModalButton>
            </ModalContent>
        </ModalContainer>
    );
};

export default MenuModal;