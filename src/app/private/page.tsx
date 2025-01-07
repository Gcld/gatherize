'use client';

import React from 'react';
import { Container } from '../styled';

const PrivatePage = () => {
    return (
        <Container>
            <h1>Private Page</h1>
            <p>This content is only accessible to authenticated users.</p>
        </Container>
    );
}

export default PrivatePage;

