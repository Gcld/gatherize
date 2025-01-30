import React from 'react';
import { LuX, LuUser, LuMail, LuShield, LuCalendar } from "react-icons/lu";
import { CloseButton, ModalContent, ModalOverlay, UserInfo, DateInfo } from './styled';

interface UserInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: {
        name: string;
        email: string;
        role: string;
        dateOfBirth: string;
    };
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;
    
    const formatDate = (dateString: string) => {
        if (!dateString) return 'Data não disponível';
        
        try {
            const [year, month, day] = dateString.split('-').map(Number);
            
            const date = new Date(Date.UTC(year, month - 1, day));
            
            if (isNaN(date.getTime())) {
                console.warn('Data inválida:', dateString);
                return 'Data inválida';
            }

            const options: Intl.DateTimeFormatOptions = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                timeZone: 'UTC'
            };

            return date.toLocaleDateString('pt-BR', options);
        } catch (error) {
            console.error('Erro ao formatar data:', error);
            return 'Erro ao formatar data';
        }
    };

    const calculateAge = (dateString: string): number | null => {
        if (!dateString) return null;
        
        try {
            const [year, month, day] = dateString.split('-').map(Number);
            const birthDate = new Date(Date.UTC(year, month - 1, day));
            const today = new Date();
            
            let age = today.getUTCFullYear() - birthDate.getUTCFullYear();
            const monthDiff = today.getUTCMonth() - birthDate.getUTCMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
                age--;
            }
            
            return age;
        } catch {
            return null;
        }
    };

    const age = calculateAge(user.dateOfBirth);

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <LuX />
                </CloseButton>
                <h2>Informações do Usuário</h2>
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
                        <span>{user.role === 'admin' ? 'Admin' : 'User'}</span>
                    </div>
                    <DateInfo>
                        <LuCalendar className="icon" />
                        <div>
                            <span>{formatDate(user.dateOfBirth)}</span>
                            {age !== null && <small>{`${age} years`}</small>}
                        </div>
                    </DateInfo>
                </UserInfo>
            </ModalContent>
        </ModalOverlay>
    );
};

export default UserInfoModal;