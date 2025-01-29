import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: space-between;
    gap: 24px;
`;

export const DesktopOnly = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: block;
    }
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

export const EventContent = styled.div`
    height: 100%;
    padding: 16px;

    @media (min-width: 600px) {
        min-height: 150px;
    }
`;

export const EventButton = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    background-color: var(--darkZaori);
    padding: 5px;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;

    .icon {
        height: 19px;
        width: 19px;
        color: var(--primaryDarkZaori);
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
    padding: 8px 16px;
    align-items: top center;

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: white;
        line-height: 120%;
    }

    h4 {
        font-size: 16px;
        font-weight: normal;
        color: var(--grayZaori);
        line-height: 130%;
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 48px;
            line-height: 110%;
        }

        h4 {
            font-size: 18px;
            line-height: 120%;
        }
    }
`;

export const ParticipantsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px 0;
`;

export const Participant = styled.div`
    padding: 10px;
    background-color: black;
    color: var(--primaryLightZaori);
    border: 1px solid var(--grayZaori);
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    cursor: default;

    @media (min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
    }
`;

export const DownloadButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 20px 0;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 250px;
    padding: 12px 20px;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .icon {
        margin-right: 10px;
        font-size: 20px;
    }

    &:hover {
        background-color: var(--darkZaori);
        color: var(--primaryDarkZaori);
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 768px) {
        width: auto;
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;

export const NoParticipantsMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    
    .icon {
        font-size: 3rem;
        color: var(--grayZaori);
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        color: var(--darkZaori);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        color: var(--grayZaori);
    }
`;