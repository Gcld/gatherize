import Link from "next/link";
import styled from "styled-components";

interface EventButtonProps {
    $isSubscribed?: boolean;
    $isCreator?: boolean;
}

export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    max-width: 400px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 400px; 
    border-radius: 10px;
    padding: 2px;
    gap: 8px;
    background-color: white;
    cursor: pointer;

    @media (min-width: 376px) and (max-width: 767.5px){
        width: 100%;
    }

    @media (min-width: 880px) and (max-width: 1023.5px){
        width: 100%;
    }

    @media (min-width: 768px) {
        transition: box-shadow 0.3s ease, transform 0.3s ease;

        &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
    }
`;

export const EventCardPicture = styled.div`
    width: 100%;
    height: 120px;
    background-color: var(--darkZaori);
    padding: 2px;
    border-radius: 9px;
    align-items: right;
    justify-content: right;
    display: flex;
`;

export const EventDate = styled.div`
    display: flex;
    height: 37px;
    width: 37px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 5px 10px;
    border-radius: 5px;

    h3{
        font-size: 14px;
        font-weight: bold;
        line-height: 120%;
        color: black;
    }
    h5{
        font-size: 8px;
        font-weight: normal;
        line-height: 120%;
        color: black;
    }

    @media (min-width: 768px){
        h3{
            font-size: 16px;
        }
        h5{
            font-size: 10px;
        }
    }

    @media (min-width: 1024px){
        h3{
            font-size: 18px;
        }
        h5{
            font-size: 12px;
        }
    }
`;

export const EventContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0px 5px;
    gap: 8px;
    flex-grow: 1; 

    h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 120%;
        color: black;
        max-height: 2.4em; 
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    @media (min-width: 768px){
        padding: 0px 8px;
        gap: 15px;
        h1{
            font-size: 28px;
            line-height: 110%;
        }
    }

    @media (min-width: 1024px){
        padding: 0px 10px;
        gap: 18px;
        h1{
            font-size: 32px;
            line-height: 110%;
        }
    }
`;

export const EventLocation = styled.div`
    display: flex;
    
    h4{
        font-size: 12px;
        font-weight: normal;
        line-height: 120%;
        color: var(--darkZaori);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (min-width: 768px){
        h4{
            font-size: 14px;
        }
    }

    @media (min-width: 1024px){
        h4{
            font-size: 16px;
        }
    }
`;

export const EventInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0px;
`;

export const Users = styled.div`
    display: flex;
    gap: 0px;
`;

export const Participants = styled.div`
    display: flex;
    gap: 5px;

    h3{
        font-size: 14px;
        font-weight: bold;
        line-height: 120%;
        color: black;
    }

    @media (min-width: 768px){
        h3{
            font-size: 16px;
        }
    }

    @media (min-width: 1024px){
        h3{
            font-size: 18px;
        }
    }
`;

export const EventButton = styled.div<EventButtonProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    gap: 4px;
    background-color: ${props => 
        props.$isCreator ? 'var(--primaryDarkZaori)' :
        props.$isSubscribed ? 'red' : 'var(--primaryDarkZaori)'
    };
    transition: background-color 0.3s ease;
    text-decoration: none;
    cursor: pointer;

    .subscribeIcon {
        flex-shrink: 0; 
        height: 18px;
        width: 18px;
        color: ${props => 
            props.$isCreator ? 'black' :
            props.$isSubscribed ? 'white' : 'black'
        };
    }

    h2 {
        font-size: 16px;
        font-weight: bold;
        line-height: 120%;
        color: ${props => 
            props.$isCreator ? 'black' :
            props.$isSubscribed ? 'white' : 'black'
        };
        white-space: nowrap;
    }

    @media (min-width: 768px) {
        &:hover {
            transform: translateY(-2px);
        }

        h2 {
            font-size: 18px;
        }

        .subscribeIcon {
            height: 24px;
            width: 24px;
        }
    }

    @media (min-width: 1024px) {
        h2 {
            font-size: 20px;
        }
    }

    @media (max-width: 767px) {
        touch-action: manipulation; 
        -webkit-tap-highlight-color: transparent; 
    }
`;