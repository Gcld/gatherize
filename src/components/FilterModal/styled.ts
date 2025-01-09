import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 100%; 
    right: 0;
    z-index: 10;
    background-color: var(--darkZaori);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-height: calc(100vh - 100%); 
    overflow-y: auto; 
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 8px;
    width: max-content; 

    @media (min-width: 768px) {
        padding: 10px;
        gap: 10px;
    }

    @media (min-width: 1024px) {
        padding: 12px;
        gap: 12px;
    }
`;

export const ModalButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 12px;
    cursor: pointer;
    padding: 8px;
    transition: background-color 0.3s;
    text-align: left;
    white-space: nowrap; 

    .icon {
        color: var(--primaryDarkZaori);
        height: 16px;
        width: 16px;
        flex-shrink: 0; 
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media (min-width: 768px) {
        font-size: 18px;
        padding: 10px;
        gap: 10px;

        .icon {
            height: 20px;
            width: 20px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 24px;
        padding: 12px;
        gap: 12px;

        .icon {
            height: 24px;
            width: 24px;
        }
    }
`;