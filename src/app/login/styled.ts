import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 568px;
    background-image: url('/background.jpg');
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

export const LoginInput = styled.input`
    width: 100%;
    border-radius: 10px;
    background-color: transparent;
    border: 1.5px solid var(--primaryLightZaori);
    align-items: left;

    h3{
        color: var(--primaryLightZaori);
        font-size: 14px;
        font-weight: normal;
        line-height: 120%;
    }
`;