'use client'

import React, { useState } from 'react';
import { LuArrowLeft, LuCalendar, LuLock, LuMail, LuUser, LuUserPen, LuX } from "react-icons/lu";
import { Container, InputBox, InputWrapper, SignInButton, SignInput, SignUpDivReturn, UserTypeButton, UserTypeButtonDiv, UserTypeDiv } from "./styled";
import Link from 'next/link';

type UserType = 'user' | 'creator' | null;

export default function Login() {
    const [selectedUserType, setSelectedUserType] = useState<UserType>(null);

    const handleUserTypeClick = (type: UserType) => {
        setSelectedUserType(type === selectedUserType ? null : type);
    };

    return (
        <Container>
            <InputBox>
                <SignUpDivReturn>
                    <Link href="/login"><LuArrowLeft className='arrowIcon' /></Link>
                    <h1>Sign Up</h1>
                </SignUpDivReturn>
                <h4>Let us help you gatherize with your friends</h4>
                <InputWrapper>
                    <LuUserPen className='icon' />
                    <SignInput type="text" placeholder="Full Name" />
                </InputWrapper>
                <InputWrapper>
                    <LuUser className='icon' />
                    <SignInput type="text" placeholder="Username" />
                </InputWrapper>
                <InputWrapper>
                    <LuCalendar className='icon' />
                    <SignInput type="date" placeholder="dd/mm/aaaa" />
                </InputWrapper>
                <InputWrapper>
                    <LuMail className='icon' />
                    <SignInput type="text" placeholder="Email" />
                </InputWrapper>
                <InputWrapper>
                    <LuLock className='icon'/>
                    <SignInput type="password" placeholder="Password" />
                </InputWrapper>
                <InputWrapper>
                    <LuLock className='icon' />
                    <SignInput type="password" placeholder="Confirm Password" />
                </InputWrapper>
                <UserTypeDiv>
                    <UserTypeButtonDiv>
                        <UserTypeButton
                            onClick={() => handleUserTypeClick('user')}
                            $isSelected={selectedUserType === 'user'}
                        >
                            {selectedUserType === 'user' && <LuX size={14} color="var(--primaryDarkZaori)" />}
                        </UserTypeButton>
                        <h4>User</h4>
                    </UserTypeButtonDiv>
                    <UserTypeButtonDiv>
                        <UserTypeButton
                            onClick={() => handleUserTypeClick('creator')}
                            $isSelected={selectedUserType === 'creator'}
                        >
                            {selectedUserType === 'creator' && <LuX size={14} color="var(--primaryDarkZaori)" />}
                        </UserTypeButton>
                        <h4>Creator</h4>
                    </UserTypeButtonDiv>
                </UserTypeDiv>
                <SignInButton>
                    <h3>Create Account</h3>
                </SignInButton>
            </InputBox>
        </Container>
    );
}