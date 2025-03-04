import styled from "styled-components";

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
    max-width: 400px;
    text-align: center;

    h2 {
        color: var(--primaryLightZaori);
        margin-bottom: 20px;
        font-size: 16px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        padding: 30px;
        max-width: 500px;

        h2 {
            font-size: 22px;
        }

        div {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
`;

export const ModalButton = styled.button<{ $confirm?: string }>`
    background-color: ${({ $confirm }) => ($confirm === "true" ? 'var(--primaryDarkZaori)' : 'red')};
    color: ${({ $confirm }) => ($confirm === "true" ? 'black' : 'var(--darkZaori)')};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
        background-color: ${({ $confirm }) => ($confirm === "true" ? 'darkred' : 'var(--grayZaori)')};
        color: ${({ $confirm }) => ($confirm === "true" ? 'white' : 'var(--darkZaori)')};
    }

    @media (min-width: 768px) {
        width: auto;
        font-size: 22px;
    }
`;


export const EventButton = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    background-color: var(--darkZaori);
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
    cursor: pointer;

    .icon {
        height: 18px;
        width: 18px;
        color: var(--primaryDarkZaori);
        transition: all 0.3s ease;
    }

    h3 {
        display: none;
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
        padding: 8px;
        gap: 8px;

        .icon {
            height: 22px;
            width: 22px;
        }

        h3 {
            display: block;
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        padding: 10px;
        gap: 10px;

        .icon {
            height: 24px;
            width: 24px;
        }

        h3 {
            font-size: 18px;
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
    margin: 16px 0;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin: 16px;
    }
`;

export const DashboardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;

    h4 {
        font-size: 14px;
        font-weight: bold;
        color: var(--primaryLightZaori);
    }

    p {
        font-size: 12px;
        font-weight: normal;
        color: var(--grayZaori);
    }

    @media (min-width: 768px) {
        h4 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (min-width: 1024px) {
        h4 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }
    }
`;