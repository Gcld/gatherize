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
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;

    h2 {
        color: var(--primaryLightZaori);
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    resize: vertical;
    min-height: 100px;
`;

export const NumberInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        background-color: var(--primaryDarkZaori);
        border: none;
        color: var(--darkZaori);
        font-size: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NumberInput = styled.input`
    width: 60px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
`;

export const SubmitButton = styled.button`
    padding: 10px;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--grayZaori);
    }
`;