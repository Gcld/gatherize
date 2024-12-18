'use client'

import { LuArrowLeft, LuCalendar, LuLock, LuMail, LuUser, LuUserPen } from "react-icons/lu";
import { Container, InputBox, InputWrapper, SignInButton, SignInput, SignUpDiv, SignUpDivReturn, UserTypeButton, UserTypeButtonDiv, UserTypeDiv } from "./styled";


export default function Login() {
    return (
        <Container>
            <InputBox>
                <SignUpDivReturn>
                    <LuArrowLeft size={24} color="var(--primaryDarkZaori)" />
                    <h2>Sign Up</h2>
                </SignUpDivReturn>
                <h4>Let us help you gatherize with your friends</h4>
                <InputWrapper>
                    <LuUserPen size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="text" placeholder="Full Name" />
                </InputWrapper>
                <InputWrapper>
                    <LuUser size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="text" placeholder="Username" />
                </InputWrapper>
                <InputWrapper>
                    <LuCalendar size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="date" placeholder="dd/mm/aaaa" />
                </InputWrapper>
                <InputWrapper>
                    <LuMail size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="text" placeholder="Email" />
                </InputWrapper>
                <InputWrapper>
                    <LuLock size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="password" placeholder="Password"/>
                </InputWrapper>
                <InputWrapper>
                    <LuLock size={16} color="var(--primaryDarkZaori)" />
                    <SignInput type="password" placeholder="Confirm Password" />
                </InputWrapper>
                <SignInButton>
                    <h3>Sign In</h3>
                </SignInButton>
                <UserTypeDiv>
                    <UserTypeButtonDiv>
                        <UserTypeButton/>
                        <h4>User</h4>
                    </UserTypeButtonDiv>
                    <UserTypeButtonDiv>
                        <UserTypeButton/>
                        <h4>Creator</h4>
                    </UserTypeButtonDiv>
                </UserTypeDiv>
                <SignUpDiv>
                    <h4>New to Gatherize?</h4>
                    <h4 className="signUp">Join Now</h4>
                </SignUpDiv>
            </InputBox>
        </Container>
    );
}