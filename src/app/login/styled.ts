import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const InputBox = styled.div`
    display: flex;
    width: 90%;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 30px;
    background-color: rgba(56, 56, 56, 0.9);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);

    h2 {
        width: 100%;
        font-size: 32px;
        font-weight: bold;
        color: var(--primaryLightZaori);
        text-align: center;
        margin-bottom: 10px;
    }

    h4 {
        font-size: 16px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        max-width: 450px;
        padding: 50px 40px;

        h2 {
            font-size: 40px;
        }

        h4 {
            font-size: 18px;
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 15px;

    .icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--primaryDarkZaori);
        font-size: 20px;
    }
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 12px 15px 12px 45px;
    border-radius: 10px;
    background-color: var(--primaryLightZaori);
    border: 2px solid transparent;
    color: var(--darkZaori);
    font-size: 16px;
    transition: all 0.3s ease;

    &::placeholder {
        color: var(--grayZaori);
    }

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
        box-shadow: 0 0 0 2px rgba(252, 205, 18, 0.2);
    }
`;

export const SignInButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: var(--primaryDarkZaori);
    border: none;
    border-radius: 10px;
    color: var(--darkZaori);
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e0b810;
        transform: translateY(-2px);
    }
`;

export const SignUpDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;

    h4 {
        font-size: 14px;
        color: var(--primaryLightZaori);
    }

    .signUp {
        color: var(--primaryDarkZaori);
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: #e0b810;
        }
    }
`;