import styled from "styled-components";

interface UserTypeButtonProps {
    $isSelected?: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 568px; 
    background-image: url('/background.jpg');
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat; 
`;

export const InputBox = styled.div`
    display: flex;
    width: 280px;
    height: 440px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 10px;
    padding: 0 15px;
    background-color: var(--darkZaori);
    border-radius: 30px;

    h4{
        font-size: 12px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
        letter-spacing: 0%;
    }

    @media (min-width: 768px){
        width: 440px;
        height: 440px;

        h4{
            font-size: 16px;
            line-height: 120%;
        }
    }

    @media (min-width: 1024px){
        width: 500px;
        height: 500px;

        h4{
            font-size: 18px;
            line-height: 110%;
        }
    }
`;

export const SignUpDivReturn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h1{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
    }

    .arrowIcon{
        width: 16px;
        height: 16px;
        color: var(--primaryDarkZaori);
    }

    @media (min-width: 768px){
        h1{
            font-size: 32px;
            line-height: 110%;
        }

        .arrowIcon{
            width: 32px;
            height: 32px;
        }
    }

    @media (min-width: 1024px){
        h1{
            font-size: 36px;
            line-height: 110%;
        }

        .arrowIcon{
            width: 36px;
            height: 36px;
        }
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .icon{
        width: 16px;
        height: 16px;
        color: var(--primaryDarkZaori);
    }

    @media (min-width: 768px){
        .icon{
            width: 18px;
            height: 18px;
            color: var(--primaryDarkZaori);
        }
    }

    @media (min-width: 1024px){
        .icon{
            width: 24px;
            height: 24px;
            color: var(--primaryDarkZaori);
        }
    }
`;

export const SignInput = styled.input`
    width: 100%;
    padding: 5px 10px 5px 30px; 
    border-radius: 10px;
    background-color: transparent;
    border: 1.5px solid var(--primaryLightZaori);
    color: var(--primaryLightZaori);
    font-size: 14px;

    &::placeholder {
        color: var(--grayZaori); 
        opacity: 0.7;
    }

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    &[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
    }

    &[type="date"]::-webkit-datetime-edit-text,
    &[type="date"]::-webkit-datetime-edit-month-field,
    &[type="date"]::-webkit-datetime-edit-day-field,
    &[type="date"]::-webkit-datetime-edit-year-field {
        color: var(--grayZaori);
    }

    &[type="password"]::-ms-reveal,
    &[type="password"]::-ms-clear {
        display: none;
    }

    @media (min-width: 1024px){
        padding: 5px 10px 5px 35px; 
        font-size: 18px;
    }
`;

export const SignInButton = styled.div`
    display: flex;
    width: 100%;
    background-color: var(--primaryDarkZaori);
    border-radius: 10px;
    h3{
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    @media (min-width: 768px){
        h3{
            font-size: 18px;
        }
    }

    @media (min-width: 1024px){
        h3{
            font-size: 24px;
        }
    }
`;

export const SignUpDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    h4{
        font-size: 14px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
    }

    .signUp{
        font-size: 14px;
        font-weight: normal;
        color: var(--primaryDarkZaori);
        line-height: 130%;
    }
`;

export const UserTypeDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
`;

export const UserTypeButtonDiv = styled.div`
    display: flex;
    gap: 3px;
    align-items: center;
    
    h4{
        font-size: 14px;
        font-weight: normal;
        color: white;
        line-height: 24px;
    }

    @media (min-width: 1024px){
        gap: 5px;
        h4{
            font-size: 18px;
        }
    }
`;

export const UserTypeButton = styled.button<UserTypeButtonProps>`
    display: flex;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    border: 1.5px solid var(--primaryDarkZaori);
    background-color: transparent;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    @media (min-width: 1024px){
        width: 20px;
        height: 20px;
    }
`;