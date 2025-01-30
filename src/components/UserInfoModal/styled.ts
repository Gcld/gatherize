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

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primaryLightZaori);

        .icon {
            color: var(--primaryDarkZaori);
        }
    }
`;

export const ViewProfileButton = styled.button`
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 24px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--grayZaori);
    }
`;

// Adicione ao arquivo de estilos do modal

export const DateInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    small {
        font-size: 12px;
        color: var(--grayZaori);
    }

    .icon {
        color: var(--primaryDarkZaori);
        font-size: 20px;
    }
`;