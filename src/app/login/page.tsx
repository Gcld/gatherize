'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LuLock, LuMail } from "react-icons/lu";
import { Container, InputBox, LoginInput, InputWrapper, SignInButton, SignUpDiv } from "./styled";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = useCallback(async () => {
        try{
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if(response?.ok){
                router.refresh();
                router.push('/private');
            } else{
                setError('Invalid credentials');
            }
        } catch(error){
            console.log('[LOGIN ERROR]: ', error);
        }
    }, [email, password, router])

    return (
        <Container>
            <InputBox>
                <h2>Sign in</h2>
                <h4>Let us help you gatherize with your friends</h4>
                <InputWrapper>
                    <LuMail className="icon" />
                    <LoginInput 
                    className="input" 
                    type="text" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                </InputWrapper>
                <InputWrapper>
                    <LuLock className="icon" />
                    <LoginInput 
                    className="input" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </InputWrapper>
                {error && <h4>{error}</h4>}
                <SignInButton onClick={handleLogin}>
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