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
    align-items: flex-start; 
    padding-top: 20px; 
    overflow-y: auto; 
    z-index: 1000;

    @media (min-width: 768px) {
        align-items: center; 
        padding-top: 0; 
    }
`;

export const ModalContent = styled.div`
    background-color: var(--darkZaori);
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    position: relative;
    margin-bottom: 20px;

    h2 {
        color: var(--primaryLightZaori);
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media (min-width: 768px) {
        padding: 30px;
        max-width: 600px;

        h2 {
            font-size: 32px;
            margin-bottom: 30px;
        }
    }

    @media (min-width: 1024px) {
        max-width: 700px;

        h2 {
            font-size: 36px;
        }
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;

    .closeIcon {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 768px) {
        top: 20px;
        right: 20px;

        .closeIcon {
            width: 32px;
            height: 32px;
        }
    }
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
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    .inputIcon {
        position: absolute;
        left: 10px;
        color: var(--darkZaori);
        width: 18px;
        height: 18px;
    }

    @media (min-width: 768px) {
        .inputIcon {
            width: 22px;
            height: 22px;
        }
    }
`;

export const Input = styled.input`
    padding: 10px 10px 10px 35px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    font-size: 14px;
    width: 100%;

    @media (min-width: 768px) {
        padding: 12px 12px 12px 40px;
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    resize: vertical;
    min-height: 100px;
    font-size: 14px;
    width: 100%;

    @media (min-width: 768px) {
        padding: 12px;
        font-size: 16px;
        min-height: 120px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        min-height: 150px;
    }
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

    .inputIcon {
        color: var(--darkZaori);
        width: 18px;
        height: 18px;
    }

    button {
        background-color: var(--primaryDarkZaori);
        border: none;
        color: var(--darkZaori);
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

        .buttonIcon {
            width: 18px;
            height: 18px;
        }
    }

    input {
        flex-grow: 1;
        text-align: center;
        padding: 5px;
        font-size: 14px;
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

    @media (min-width: 768px) {
        padding: 8px 12px;

        .inputIcon {
            width: 22px;
            height: 22px;
        }

        button {
            width: 36px;
            height: 36px;

            .buttonIcon {
                width: 22px;
                height: 22px;
            }
        }

        input {
            font-size: 16px;
            width: 60px;
        }
    }

    @media (min-width: 1024px) {
        .inputIcon {
            width: 24px;
            height: 24px;
        }

        button {
            width: 40px;
            height: 40px;

            .buttonIcon {
                width: 24px;
                height: 24px;
            }
        }

        input {
            font-size: 18px;
            width: 70px;
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

    @media (min-width: 768px) {
        padding: 14px;
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        padding: 16px;
        font-size: 20px;
    }
`;