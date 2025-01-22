import React from 'react';
import { LuX, LuUser, LuMail, LuShield } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { CloseButton, ModalContent, ModalOverlay, UserInfo, ViewProfileButton } from './styled';


interface UserInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: {
        name: string;
        email: string;
        role: string;
    };
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ isOpen, onClose, user }) => {
    const router = useRouter();

    if (!isOpen) return null;

    const handleViewProfile = () => {
        router.push('/profile');
        onClose();
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>User Information</h2>
                <UserInfo>
                    <div>
                        <LuUser className="icon" />
                        <span>{user.name}</span>
                    </div>
                    <div>
                        <LuMail className="icon" />
                        <span>{user.email}</span>
                    </div>
                    <div>
                        <LuShield className="icon" />
                        <span>{user.role}</span>
                    </div>
                </UserInfo>
                <ViewProfileButton onClick={handleViewProfile}>
                    View Full Profile
                </ViewProfileButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default UserInfoModal;