'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

import { DeniedContainer, DeniedIcon, DeniedTitle, DeniedMessage, BackButton } from './styled';
import { LuOctagonX } from 'react-icons/lu';

const DeniedPage = () => {
    const router = useRouter();

    return (
        <DeniedContainer>
            <DeniedIcon>
                <LuOctagonX />
            </DeniedIcon>
            <DeniedTitle>Access Denied</DeniedTitle>
            <DeniedMessage>
                Oops! It looks like you don&apos;t have permission to access this page. 
                If you believe this is an error, please contact the administrator.
            </DeniedMessage>
            <BackButton onClick={() => router.push('/')}>
                Go back to home
            </BackButton>
        </DeniedContainer>
    );
}

export default DeniedPage;