import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: var(--darkZaori);
    padding: 5px;
    border-radius: 0 0 0 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;

    .closeIcon {
        color: var(--primaryDarkZaori);
    }

    @media (min-width: 768px) {
        padding: 12px;
        gap: 12px;

        .closeIcon {
            font-size: 24px;
        }
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
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s;

    .icon {
        color: var(--primaryDarkZaori);
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media (min-width: 768px) {
        font-size: 18px; 
        padding: 12px;

        .icon{
            height: 24px;
            width: 24px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 24px; 
        padding: 14px;
    }
`;