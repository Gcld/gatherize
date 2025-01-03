'use client';

import React from 'react';
import { LuArrowLeft, LuCalendar, LuMail, LuLock, LuUser, LuSave, LuCircleUser } from 'react-icons/lu';
import Link from 'next/link';
import { BackButton, Container, SaveButton, Header, InfoInput, InputsDiv, InputWrapper, ProfileHeader } from './styled';

export default function EditProfile() {
    return (
        <Container>
            <Header>
                <Link href="/profile" passHref>
                    <BackButton>
                        <LuArrowLeft size={24} />
                    </BackButton>
                </Link>
                <ProfileHeader>
                    <LuCircleUser className="profileIcon" />
                    <h1>Edit Profile</h1>
                </ProfileHeader>
            </Header>
            <InputsDiv>
                <InputWrapper>
                    <LuUser className="icon" />
                    <InfoInput type="text" defaultValue="gabriel.lima" />
                </InputWrapper>
                <InputWrapper>
                    <LuUser className="icon" />
                    <InfoInput type="text" defaultValue="Gabriel Lima" />
                </InputWrapper>
                <InputWrapper>
                    <LuCalendar className="icon" />
                    <InfoInput type="date" defaultValue="2000-01-01" />
                </InputWrapper>
                <InputWrapper>
                    <LuMail className="icon" />
                    <InfoInput type="email" defaultValue="gabriel.lima.712@ufrn.edu.br" />
                </InputWrapper>
                <InputWrapper>
                    <LuLock className="icon" />
                    <InfoInput type="password" defaultValue="***********" />
                </InputWrapper>
            </InputsDiv>
            <SaveButton>
                <LuSave className="icon" />
                <h3>Save Changes</h3>
            </SaveButton>
        </Container>
    );
}