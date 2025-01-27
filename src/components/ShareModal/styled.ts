import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: var(--darkZaori);
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
        color: var(--primaryLightZaori);
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
    }

    @media (min-width: 768px) {
        padding: 30px;
        gap: 20px;

        h2 {
            font-size: 28px;
        }
    }
`;

export const ShareButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 12px 15px;
    border: none;
    border-radius: 8px;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: bold;

    svg {
        margin-right: 15px;
        font-size: 20px;
    }

    &:hover {
        background-color: #e0b810;
        transform: translateY(-2px);
    }

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 15px 20px;

        svg {
            font-size: 24px;
        }
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--primaryDarkZaori);
    transition: color 0.3s ease;

    &:hover {
        color: var(--primaryLightZaori);
    }

    @media (min-width: 768px) {
        font-size: 28px;
    }
`;