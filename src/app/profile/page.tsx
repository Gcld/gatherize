'use client';

import React, { useEffect, useState } from 'react';
import { LuArrowLeft, LuMail, LuLock, LuUser, LuCircleUser } from 'react-icons/lu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BackButton, Container, Header, InfoInput, InputsDiv, InputWrapper, ProfileHeader } from './styled';

export default function Profile() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        role: '',
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        } else if (status === 'authenticated' && session.user) {
            setUserData({
                name: session.user.name || '',
                email: session.user.email || '',
                role: session.user.role || '',
            });
        }
    }, [status, session, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
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
                    <LuLock className="icon" />
                    <InfoInput type="text" value={userData.role} readOnly />
                </InputWrapper>
            </InputsDiv>
        </Container>
    );
}