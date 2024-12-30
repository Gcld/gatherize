import styled from "styled-components";

export const EventButton = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    gap: 4px; 
    background-color: var(--primaryDarkZaori);
    transition: background-color 0.3s ease;

    .subscribeIcon {
        height: 18px;
        width: 18px;
        color: black;
    }

    h2{
        font-size: 16px;
        font-weight: bold;
        line-height: 120%;
        color: black;
    }

    @media (min-width: 768px){
        h2{
            font-size: 18px;
        }

        .subscribeIcon {
            height: 24px;
            width: 24px;
        }
    }

    @media (min-width: 1024px){
        h2{
            font-size: 24px;
        }
    }
`;