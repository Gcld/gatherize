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
    padding: 3px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transition: all 0.3s ease;
    cursor: pointer;

    .icon {
        height: 18px;
        width: 18px;
        color: var(--primaryDarkZaori);
        transition: all 0.3s ease;
    }

    h3 {
        font-size: 14px;
        font-weight: bold;
        line-height: 120%;
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: var(--primaryDarkZaori);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        .icon {
        color: var(--darkZaori);
        transform: scale(1.1);
        }

        h3 {
        color: var(--darkZaori);
        }
    }

    @media (min-width: 768px) {
        .icon {
        height: 22px;
        width: 22px;
        }
    }
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

    @media (min-width: 768px){
        h1{
            font-size: 48px;
            line-height: 110%;
        }

        h4{
            font-size: 18px;
            line-height: 120%;
        }
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
        line-height: 120%;
    }

    h5{
        font-size: 14px;
        font-weight: bold;
        color: white;
        line-height: 120%;
    }

    h6{
        font-size: 14px;
        font-weight: normal;
        color: var(--grayZaori);
        line-height: 120%;
    }

    @media (min-width: 768px){
        h4{
            font-size: 18px;
            line-height: 120%;
        }
        h5{
            font-size: 16px;
            line-height: 120%;
        }
        h6{
        font-size: 16px;
        font-weight: normal;
        color: var(--grayZaori);
        line-height: 120%;
    }
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
    cursor: pointer;
    transition: all 0.3s ease;

    .participantsIcon {
        height: 24px;
        width: 24px;
        color: black;
        transition: all 0.3s ease;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: black;
        line-height: 120%;
        transition: all 0.3s ease;
    }

    &:hover {
        background-color: var(--darkZaori);

        .participantsIcon {
        color: var(--primaryDarkZaori);
        transform: rotate(15deg) scale(1.1);
        }

        h1 {
        color: var(--primaryDarkZaori);
        transform: scale(1.05);
        }
    }

    @media (min-width: 768px) {
        height: 10vh;
        .subscribeIcon {
        height: 32px;
        width: 32px;
        }

        h1 {
        font-size: 32px;
        line-height: 110%;
        }
    }
`;