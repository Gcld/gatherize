'use client';

import React from 'react';
import { LuArrowLeft, LuCalendar, LuMail, LuLock, LuUser, LuPenTool, LuCircleUser } from 'react-icons/lu';
import Link from 'next/link';
import { BackButton, Container, EditButton, Header, InfoInput, InputsDiv, InputWrapper, ProfileHeader } from './styled';

export default function Profile() {
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
                    <h1>Gabriel Lima</h1>
                </ProfileHeader>
            </Header>
            <InputsDiv>
                <InputWrapper>
                    <LuUser className="icon" />
                    <InfoInput type="text" defaultValue="gabriel.lima" readOnly />
                </InputWrapper>
                <InputWrapper>
                    <LuCalendar className="icon" />
                    <InfoInput type="text" defaultValue="DD/MM/YYYY" readOnly />
                </InputWrapper>
                <InputWrapper>
                    <LuMail className="icon" />
                    <InfoInput type="email" defaultValue="gabriel.lima.712@ufrn.edu.br" readOnly />
                </InputWrapper>
                <InputWrapper>
                    <LuLock className="icon" />
                    <InfoInput type="password" defaultValue="***********" readOnly />
                </InputWrapper>
            </InputsDiv>
            <Link href="/profile/edit" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: '600px' }}>
                <EditButton>
                    <LuPenTool className="icon" />
                    <h3>Edit Info</h3>
                </EditButton>
            </Link>
        </Container>
    );
}