import React, { useState } from 'react';
import { LuUser, LuX, LuLogOut, LuLogIn, LuHouse } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton } from './styled';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import UserInfoModal from '../UserInfoModal';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
    const { data: session } = useSession();
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);

    if (!isOpen) return null;

    const handleProfileClick = () => {
        setIsUserInfoModalOpen(true);
    };

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <LuX className="closeIcon" onClick={onClose}/>
                {session ? (
                    <>
                        <Link href='/' passHref>
                            <ModalButton onClick={onClose}>
                                <LuHouse className='icon'/>
                                <span>Home</span>
                            </ModalButton>
                        </Link>
                        <ModalButton onClick={handleProfileClick}>
                            <LuUser className='icon'/>
                            <span>Profile</span>
                        </ModalButton>
                        <ModalButton onClick={() => signOut()}>
                            <LuLogOut className='icon'/>
                            <span>Logout</span>
                        </ModalButton>
                    </>
                ) : (
                    <Link href='/login' passHref>
                        <ModalButton onClick={onClose}>
                            <LuLogIn className='icon'/>
                            <span>Login</span>
                        </ModalButton>
                    </Link>
                )}
            </ModalContent>
            {session && session.user && (
                <UserInfoModal
                    isOpen={isUserInfoModalOpen}
                    onClose={() => {
                        setIsUserInfoModalOpen(false);
                        onClose();
                    }}
                    user={{
                        name: session.user.name || 'Usuário',
                        email: session.user.email || 'email@exemplo.com',
                        role: session.user.role || 'user',
                        dateOfBirth: session.user.dateOfBirth || '2000-01-01', 
                    }}
                />
            )}
        </ModalContainer>
    );
};

export default MenuModal;