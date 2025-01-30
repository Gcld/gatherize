'use client';

import React, { useEffect, useState } from 'react';
import { LuArrowLeft, LuMail, LuLock, LuUser, LuCircleUser, LuCalendar } from 'react-icons/lu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { 
    BackButton, 
    Container, 
    Header, 
    InfoInput, 
    InputsDiv, 
    InputWrapper, 
    ProfileHeader,
    LoadingSpinner,
    ErrorMessage 
} from './styled';

interface UserData {
    name: string;
    email: string;
    role: string;
    dateOfBirth: string;
}

export default function Profile() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        role: '',
        dateOfBirth: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeProfile = async () => {
            try {
                if (status === 'unauthenticated') {
                    toast.error('Sessão expirada. Faça login novamente.');
                    router.push('/login');
                    return;
                }

                if (status === 'authenticated' && session.user) {
                    setUserData({
                        name: session.user.name || '',
                        email: session.user.email || '',
                        role: session.user.role || '',
                        dateOfBirth: session.user.dateOfBirth || '',
                    });
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Erro ao carregar perfil:', error);
                setError('Ocorreu um erro ao carregar seu perfil. Tente novamente.');
                setIsLoading(false);
            }
        };

        initializeProfile();
    }, [status, session, router]);

    const formatDate = (date: string) => {
        if (!date) return '';
        return new Date(date).toLocaleDateString('pt-BR');
    };

    if (isLoading) {
        return (
            <Container>
                <LoadingSpinner>Carregando perfil...</LoadingSpinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <ErrorMessage>
                    <p>{error}</p>
                    <button onClick={() => router.push('/')}>Voltar para Home</button>
                </ErrorMessage>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <Link href="/" passHref>
                    <BackButton>
                        <LuArrowLeft size={24} />
                    </BackButton>
                </Link>
                <ProfileHeader>
                    <LuCircleUser className="profileIcon" />
                    <h1>{userData.name}</h1>
                </ProfileHeader>
            </Header>
            <InputsDiv>
                <InputWrapper>
                    <LuUser className="icon" />
                    <InfoInput type="text" value={userData.name} readOnly />
                </InputWrapper>
                <InputWrapper>
                    <LuMail className="icon" />
                    <InfoInput type="email" value={userData.email} readOnly />
                </InputWrapper>
                <InputWrapper>
                    <LuCalendar className="icon" />
                    <InfoInput 
                        type="text" 
                        value={formatDate(userData.dateOfBirth)} 
                        readOnly 
                    />
                </InputWrapper>
                <InputWrapper>
                    <LuLock className="icon" />
                    <InfoInput 
                        type="text" 
                        value={userData.role === 'admin' ? 'Administrador' : 'Usuário'} 
                        readOnly 
                    />
                </InputWrapper>
            </InputsDiv>
        </Container>
    );
}