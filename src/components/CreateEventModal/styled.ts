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
    position: relative;

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

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Label = styled.label`
    color: var(--primaryLightZaori);
    margin-bottom: 5px;
    font-weight: bold;
`;

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        left: 10px;
        color: var(--darkZaori);
    }
`;

export const Input = styled.input`
    padding: 10px 10px 10px 35px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    font-size: 16px;
    width: 100%;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    resize: vertical;
    min-height: 100px;
    font-size: 16px;
    width: 100%;
`;

export const NumberInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 5px 10px;
    background-color: var(--primaryLightZaori);
    border-radius: 5px;
    border: 1px solid var(--grayZaori);

    svg {
        color: var(--darkZaori);
    }

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
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--grayZaori);
        }
    }

    input {
        flex-grow: 1;
        text-align: center;
        padding: 5px;
        font-size: 16px;
        border: none;
        background-color: transparent;
        color: var(--darkZaori);
        width: 50px;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type=number] {
            -moz-appearance: textfield;
        }
    }
`;

export const SubmitButton = styled.button`
    padding: 12px;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 0.3s;
    width: 100%;

    &:hover {
        background-color: var(--grayZaori);
    }
`;