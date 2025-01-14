import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export const DeniedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f8d7da;
    color: #721c24;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
`;

export const DeniedIcon = styled.div`
    font-size: 60px;
    margin-bottom: 20px;
    animation: ${pulse} 2s infinite;

    @media (min-width: 768px) {
        font-size: 80px;
    }

    @media (min-width: 1024px) {
        font-size: 100px;
    }
`;

export const DeniedTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
        font-size: 3rem;
    }
`;

export const DeniedMessage = styled.p`
    font-size: 1rem;
    max-width: 90%;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: 1.1rem;
        max-width: 70%;
    }

    @media (min-width: 1024px) {
        font-size: 1.2rem;
        max-width: 600px;
    }
`;

export const BackButton = styled.button`
    background-color: #721c24;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #a71d2a;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    @media (min-width: 768px) {
        font-size: 1rem;
        padding: 12px 24px;
    }
`;