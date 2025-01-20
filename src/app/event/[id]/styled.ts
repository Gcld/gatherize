import styled from "styled-components";

interface SubscribeButtonProps {
    $isSubscribed: boolean;
    $disabled?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: space-between;
    gap: 24px;
`;

export const UserInfoContainer = styled.div`
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
        margin-bottom: 10px;
        color: #333;
    }

    p {
        margin: 5px 0;
        color: #666;
    }

    a {
        color: #0070f3;
        text-decoration: none;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
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
    gap: 12px;

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

export const EventDateAndLocationDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
`;

export const EventDescriptionAndButtonDiv = styled.div<SubscribeButtonProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.$isSubscribed ? 'red' : 'var(--primaryDarkZaori)'};
`;

export const EventDescriptionDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 8px;
    background-color: black;
    border-radius: 0 0 10px 10px;

    @media (min-width: 768px) {
        padding: 24px 8px;
    }
`;

export const SubscribeButton = styled.div<SubscribeButtonProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    background-color: ${props => props.$isSubscribed ? 'red' : 'var(--primaryDarkZaori)'};
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px;
    cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.$disabled ? 0.6 : 1};
    transition: all 0.3s ease;

    .subscribeIcon {
        height: 24px;
        width: 24px;
        color: ${props => props.$isSubscribed ? 'white' : 'black'};
        transition: all 0.3s ease;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        color: ${props => props.$isSubscribed ? 'white' : 'black'};
        line-height: 120%;
        transition: all 0.3s ease;
    }

    &:hover {
        ${props => !props.$disabled && `
            .subscribeIcon {
                transform: rotate(15deg) scale(1.1);
            }

            h1 {
                transform: scale(1.05);
            }
        `}
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

export const ViewParticipantsButton = styled.div`
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