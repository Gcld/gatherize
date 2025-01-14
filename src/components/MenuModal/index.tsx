import React from 'react';
import { LuUser, LuX, LuLogOut, LuLogIn, LuHouse } from "react-icons/lu";
import { ModalContainer, ModalContent, ModalButton } from './styled';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
    const { data: session } = useSession();

    if (!isOpen) return null;

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
                        <Link href='/profile' passHref>
                            <ModalButton onClick={onClose}>
                                <LuUser className='icon'/>
                                <span>Profile</span>
                            </ModalButton>
                        </Link>
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
        </ModalContainer>
    );
};

export default MenuModal;