'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '../styled';

const DeniedPage = () => {
    const router = useRouter();

    return (
        <Container>
            <h1>Access Denied</h1>
            <p>You do not have permission to access this page.</p>
            <button onClick={() => router.push('/')}>Go back to home</button>
        </Container>
    );
}

export default DeniedPage;