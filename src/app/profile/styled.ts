import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--darkZaori);
    padding: 20px;
    gap: 32px;

    @media (min-width: 768px) {
        padding: 32px;
        gap: 48px;
    }

    @media (min-width: 1024px) {
        padding: 48px;
        gap: 64px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 600px;
    gap: 20px;
`;

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    max-width: 600px;

    @media (min-width: 768px) {
        gap: 32px;
    }
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    color: var(--primaryDarkZaori);
    cursor: pointer;
    padding: 8px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .profileIcon {
        width: 80px;
        height: 80px;
        color: var(--primaryDarkZaori);
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: var(--primaryLightZaori);
        text-align: center;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;

        .profileIcon {
            width: 100px;
            height: 100px;
        }

        h1 {
            font-size: 28px;
        }
    }

    @media (min-width: 1024px) {
        gap: 32px;

        .profileIcon {
            width: 120px;
            height: 120px;
        }

        h1 {
            font-size: 32px;
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--primaryLightZaori);
    border-radius: 12px;
    padding: 16px;
    gap: 16px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }

    .icon {
        color: var(--primaryDarkZaori);
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    @media (min-width: 768px) {
        padding: 18px;
        .icon {
            width: 28px;
            height: 28px;
        }
    }

    @media (min-width: 1024px) {
        padding: 20px;
        .icon {
            width: 32px;
            height: 32px;
        }
    }
`;

export const InfoInput = styled.input`
    flex: 1;
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 16px;
    font-weight: 500;
    outline: none;
    width: 100%;

    &:read-only {
        cursor: default;
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

export const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--primaryDarkZaori);
    font-size: 1.2rem;
`;

export const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
    text-align: center;

    p {
        color: var(--primaryDarkZaori);
        font-size: 1.1rem;
    }

    button {
        padding: 0.8rem 1.5rem;
        background-color: var(--primaryDarkZaori);
        color: var(--darkZaori);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    }
`;