'use client'

import { LuLock, LuMail } from "react-icons/lu";
import { Container, InputBox, LoginInput, InputWrapper, SignInButton, SignUpDiv } from "./styled";
import Link from "next/link";

export default function Login() {
    return (
        <Container>
            <InputBox>
                <h2>Sign in</h2>
                <h4>Let us help you gatherize with your friends</h4>
                <InputWrapper>
                    <LuMail className="icon" />
                    <LoginInput className="input" type="text" placeholder="Email"/>
                </InputWrapper>
                <InputWrapper>
                    <LuLock className="icon" />
                    <LoginInput className="input" type="text" placeholder="Password" />
                </InputWrapper>
                <SignInButton>
                    <h3>Sign In</h3>
                </SignInButton>
                <SignUpDiv>
                    <h4>New to Gatherize?</h4>
                    <Link href="/signup"><h4 className="signUp">Join Now</h4></Link>
                </SignUpDiv>
            </InputBox>
        </Container>
    );
}