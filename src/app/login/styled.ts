import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 568px; 
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
`;

export const InputBox = styled.div`
    display: flex;
    width: 280px;
    height: 440px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 10px;
    padding: 0 15px;
    background-color: var(--darkZaori);
    border-radius: 30px;

    h2{
        width: 100%;
        font-size: 24px;
        font-weight: normal;
        color: var(--primaryLightZaori);
    }

    h4{
        font-size: 12px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
        letter-spacing: 0%;
    }

    @media (min-width: 768px){
        width: 400px;
        height: 400px;

        h2{
            font-size: 48px;
            line-height: 110%;
        }

        h4{
            font-size: 16px;
            line-height: 120%;
        }
    }

    @media (min-width: 1024px){
        width: 500px;
        height: 500px;
        gap: 20px;

        h2{
            font-size: 56px;
            line-height: 110%;
        }

        h4{
            font-size: 18px;
            line-height: 120%;
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .icon{
        height: 16px;
        width: 16px;
        color: var(--primaryDarkZaori); 
    }

    @media (min-width: 768px){
        .icon{
            height: 18px;
            width: 18px;
            color: var(--primaryDarkZaori); 
        }
    }

    @media (min-width: 1024px){
        .icon{
            height: 24px;
            width: 24px;
            color: var(--primaryDarkZaori); 
        }
    }
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 5px 10px 5px 30px; 
    border-radius: 10px;
    background-color: transparent;
    border: 1.5px solid var(--primaryLightZaori);
    color: var(--primaryLightZaori);
    font-size: 14px;

    &::placeholder {
        color: var(--primaryLightZaori);
        opacity: 0.7;
    }

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    @media (min-width: 768px){
        padding: 5px 10px 5px 32px; 
        font-size: 16px;
    }

    @media (min-width: 1024px){
        padding: 5px 10px 5px 38px; 
        font-size: 18px;
    }
`;

export const SignInButton = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--primaryDarkZaori);
    border-radius: 10px;
    h3{
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    @media (min-width: 768px){
        h3{
            font-size: 18px;
        }
    }

    @media (min-width: 1024px){
        h3{
            font-size: 24px;
        }
    }
`;

export const SignUpDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    h4{
        font-size: 14px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
    }

    .signUp{
        font-size: 14px;
        font-weight: normal;
        color: var(--primaryDarkZaori);
        line-height: 130%;
    }

    @media (min-width: 768px){
        h4{
            font-size: 16px;
            line-height: 120%;
        }

        .signUp{
            font-size: 16px;
            line-height: 120%;
        }
    }

    @media (min-width: 1024px){
        h4{
            font-size: 18px;
            line-height: 120%;
        }

        .signUp{
            font-size: 18px;
            line-height: 120%;
        }
    }
`;