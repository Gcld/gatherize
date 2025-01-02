import styled from "styled-components";

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

export const EventDescriptionAndButtonDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--primaryDarkZaori);
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

        .participantsIcon {
        transform: rotate(15deg) scale(1.1);
        }

        h1 {
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

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background-color: var(--darkZaori);
    border-radius: 10px;
    margin: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const DashboardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;

    h4 {
        font-size: 16px;
        font-weight: bold;
        color: var(--primaryLightZaori);
    }

    p {
        font-size: 14px;
        font-weight: normal;
        color: var(--grayZaori);

        @media (min-width: 768px) {
            font-size: 16px;
        }

        @media (min-width: 1024px) {
            font-size: 18px;
        }
    }
`;