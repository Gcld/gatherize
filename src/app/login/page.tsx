'use client'

import { Container, InputBox, LoginInput } from "./styled";

export default function Login() {
    return (
        <Container>
            <InputBox>
                <h2>Sign in</h2>
                <h4>Let us help you gatherize with your friends</h4>
                <LoginInput type="text" placeholder="Email" />
            </InputBox>
        </Container>
    );
}