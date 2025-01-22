import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: var(--darkZaori);
    padding: 24px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    position: relative;

    h2 {
        color: var(--primaryLightZaori);
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: bold;
    }

    p {
        color: var(--primaryLightZaori);
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 1.5;
    }

    @media (min-width: 768px) {
        padding: 32px;
        max-width: 500px;

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 18px;
        }
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primaryDarkZaori);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
`;

export const Button = styled.button`
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

export const CancelButton = styled(Button)`
    background-color: var(--grayZaori);
    color: var(--darkZaori);
    border: none;

    &:hover {
        background-color: #9A9A9A;
    }
`;

export const DeleteButton = styled(Button)`
    background-color: #FF4136;
    color: white;
    border: none;

    &:hover {
        background-color: #E60000;
    }
`;