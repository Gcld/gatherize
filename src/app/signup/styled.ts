import styled from "styled-components";

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

    h2{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        color: var(--primaryLightZaori);
    }

    h4{
        font-size: 12px;
        font-weight: normal;
        color: var(--primaryLightZaori);
        line-height: 130%;
        letter-spacing: 0%;
    }
`;

export const SignUpDivReturn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h2{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        color: var(--primaryLightZaori);
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
`;

export const UserTypeButton = styled.button`
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
`;