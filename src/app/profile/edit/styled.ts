import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--darkZaori);
    padding: 20px;
    gap: 24px;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding: 32px;
        gap: 32px;
    }

    @media (min-width: 1024px) {
        padding: 48px;
        gap: 48px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
`;

export const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 600px;

    @media (min-width: 768px) {
        gap: 24px;
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
    flex-direction: row;
    align-items: center;
    gap: 12px;

    .profileIcon {
        width: 48px;
        height: 48px;
        color: var(--primaryDarkZaori);
    }

    h1 {
        font-size: 20px;
        font-weight: bold;
        color: var(--primaryLightZaori);
    }

    @media (min-width: 768px) {
        gap: 16px;

        .profileIcon {
            width: 60px;
            height: 60px;
        }

        h1 {
            font-size: 24px;
        }
    }

    @media (min-width: 1024px) {
        gap: 20px;

        .profileIcon {
            width: 72px;
            height: 72px;
        }

        h1 {
            font-size: 28px;
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    border: 1.5px solid var(--primaryLightZaori);
    border-radius: 10px;
    padding: 12px;
    gap: 12px;

    .icon {
        color: var(--primaryDarkZaori);
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }

    @media (min-width: 768px) {
        padding: 14px;
        .icon {
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 1024px) {
        padding: 16px;
        .icon {
            width: 28px;
            height: 28px;
        }
    }
`;

export const InfoInput = styled.input`
    flex: 1;
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 14px;
    font-weight: bold;
    outline: none;
    width: 100%;

    &:focus {
        color: var(--primaryDarkZaori);
    }

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    max-width: 600px;
    padding: 14px;
    background-color: var(--primaryDarkZaori);
    border: none;
    border-radius: 10px;
    color: var(--darkZaori);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--primaryLightZaori);
        color: var(--darkZaori);
        transform: translateY(-2px);
    }

    .icon {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 16px;

        .icon {
            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 20px;
        padding: 18px;

        .icon {
            width: 28px;
            height: 28px;
        }
    }
`;