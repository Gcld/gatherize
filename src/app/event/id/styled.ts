import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: space-between;
`;

export const EventPicture = styled.div`
    width: 100%;
    height: 35vh;
    background-color: var(--primaryLightZaori);
    align-items: top;
    padding: 10px 5px;
`;

export const EventButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const EventButton = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    background-color: var(--darkZaori);
    padding: 5px;
    justify-content: space-between;
`;

export const TitleAndDescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    padding: 0 16px;
    align-items: top center;

    h1{
        font-size: 24px;
        font-weight: bold;
        color: white;
        line-height: 120%;
    }

    h4{
        font-size: 16px;
        font-weight: normal;
        color: var(--grayZaori);
        line-height: 130%;
    }
`;

export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4{
        font-size: 16px;
        font-weight: bold;
        color: white;
        line-height: 130%;
    }

    h5{
        font-size: 14px;
        font-weight: bold;
        color: white;
        line-height: 130%;
    }

    h6{
        font-size: 14px;
        font-weight: normal;
        color: var(--grayZaori);
        line-height: 130%;
    }
`;

export const EventDateAndLocationDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
`;

export const EventDescriptionAndButtonDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--primaryDarkZaori);
`;

export const EventDescriptionDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 8px;
    background-color: black;
    border-radius: 0 0 10px 10px;
`;

export const SubscribeButton = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    background-color: var(--primaryDarkZaori);
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px;

    h1{
        font-size: 24px;
        font-weight: bold;
        color: black;
        line-height: 120%;
    }
`;