import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 100%; // Posiciona logo abaixo do elemento pai
    right: 0;
    z-index: 10;
    background-color: var(--darkZaori);
    border-radius: 0 0 10px 10px;
    min-width: 200px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);

    @media (min-width: 768px) {
        min-width: 250px;
    }

    @media (min-width: 1024px) {
        min-width: 300px;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    @media (min-width: 768px) {
        padding: 12px;
        gap: 12px;
    }

    @media (min-width: 1024px) {
        padding: 14px;
        gap: 14px;
    }
`;

export const ModalButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s;
    text-align: left;
    width: 100%;

    .icon {
        color: var(--primaryDarkZaori);
        margin-right: 10px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    svg {
        font-size: 20px;
    }

    @media (min-width: 768px) {
        font-size: 16px;
        padding: 12px;

        svg {
            font-size: 22px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 18px; 
        padding: 14px;

        svg {
            font-size: 24px;
        }
    }
`;