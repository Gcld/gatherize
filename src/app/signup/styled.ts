import styled from "styled-components";

interface UserTypeButtonProps {
    $isSelected?: boolean;
}

export const SignUpDivReturn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 20px;

    h1 {
        font-size: 28px;
        font-weight: bold;
        color: var(--primaryLightZaori);
    }

    .arrowIcon {
        color: var(--primaryDarkZaori);
        font-size: 24px;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateX(-5px);
        }
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 32px;
        }

        .arrowIcon {
            font-size: 28px;
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 15px;

    .icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--primaryDarkZaori);
        font-size: 20px;
    }
`;

export const SignInput = styled.input`
    width: 100%;
    padding: 12px 15px 12px 45px;
    border-radius: 10px;
    background-color: var(--primaryLightZaori);
    border: 2px solid transparent;
    color: var(--darkZaori);
    font-size: 16px;
    transition: all 0.3s ease;

    &::placeholder {
        color: var(--grayZaori);
    }

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
        box-shadow: 0 0 0 2px rgba(252, 205, 18, 0.2);
    }
`;

export const SignInButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: var(--primaryDarkZaori);
    border: none;
    border-radius: 10px;
    color: var(--darkZaori);
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e0b810;
        transform: translateY(-2px);
    }
`;

export const UserTypeDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
`;

export const UserTypeButtonDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h4 {
        font-size: 16px;
        color: var(--primaryLightZaori);
        margin: 0; 
    }
`;

export const UserTypeButton = styled.button<UserTypeButtonProps>`
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border: 2px solid var(--primaryDarkZaori);
    background-color: ${props => props.$isSelected ? 'var(--primaryDarkZaori)' : 'transparent'};
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover {
        background-color: ${props => props.$isSelected ? 'var(--primaryDarkZaori)' : 'rgba(252, 205, 18, 0.2)'};
    }

    svg {
        color: var(--darkZaori);
    }
`;