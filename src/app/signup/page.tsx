'use client'

import React, { useState } from 'react';
import { LuArrowLeft, LuCheck, LuLock, LuMail, LuUserPen } from "react-icons/lu";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Container, InputBox } from '../login/styled';
import { InputWrapper, SignInButton, SignInput, SignUpDivReturn, UserTypeButton, UserTypeButtonDiv, UserTypeDiv } from './styled';
import { api } from '@/service/service';

type UserType = 'user' | 'admin' | null;

export default function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedUserType, setSelectedUserType] = useState<UserType>(null);
    const router = useRouter();

    const handleUserTypeClick = (type: UserType) => {
        setSelectedUserType(type === selectedUserType ? null : type);
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }

        if (!selectedUserType) {
            toast.error("Please select a user type");
            return;
        }

        try {
            const response = await api.post('/auth/signup', {
                name: fullName,
                email,
                password,
                role: selectedUserType,
            });
    
            if (response.status === 201) {
                toast.success('Account created successfully');
                router.push('/login');
            } else {
                toast.error(response.data.error || 'Failed to create account');
            }
        } catch (error) {
            console.error('Error creating account:', error);
            toast.error('Failed to create account. Please try again.');
        }
    };

    return (
        <Container>
            <InputBox>
                <SignUpDivReturn>
                    <Link href="/login"><LuArrowLeft className='arrowIcon' /></Link>
                    <h1>Sign Up</h1>
                </SignUpDivReturn>
                <h4>Let us help you gatherize with your friends</h4>
                <form onSubmit={handleSignUp}>
                    <InputWrapper>
                        <LuUserPen className='icon' />
                        <SignInput type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </InputWrapper>
                    <InputWrapper>
                        <LuMail className='icon' />
                        <SignInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </InputWrapper>
                    <InputWrapper>
                        <LuLock className='icon'/>
                        <SignInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </InputWrapper>
                    <InputWrapper>
                        <LuLock className='icon' />
                        <SignInput type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </InputWrapper>
                    <UserTypeDiv>
                        <UserTypeButtonDiv>
                            <UserTypeButton
                                type="button"
                                onClick={() => handleUserTypeClick('user')}
                                $isSelected={selectedUserType === 'user'}
                            >
                                {selectedUserType === 'user' && <LuCheck size={14} />}
                            </UserTypeButton>
                            <h4>User</h4>
                        </UserTypeButtonDiv>
                        <UserTypeButtonDiv>
                            <UserTypeButton
                                type="button"
                                onClick={() => handleUserTypeClick('admin')}
                                $isSelected={selectedUserType === 'admin'}
                            >
                                {selectedUserType === 'admin' && <LuCheck size={14} />}
                            </UserTypeButton>
                            <h4>Admin</h4>
                        </UserTypeButtonDiv>
                    </UserTypeDiv>
                    <SignInButton type="submit">
                        Create Account
                    </SignInButton>
                </form>
            </InputBox>
        </Container>
    );
}