import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    padding: 2px;
    gap: 8px;
    background-color: white;

    @media (min-width: 768px){
        width: 80%;
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
`;

export const EventContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 0px 5px;
    gap: 8px;

    h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 120%;
        color: black;
    }
`;

export const EventLocation = styled.div`
    display: flex;
    
    h4{
        font-size: 12px;
        font-weight: normal;
        line-height: 120%;
        color: var(--darkZaori);
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
`;

export const EventButton = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--primaryDarkZaori);

    h2{
        font-size: 16px;
        font-weight: bold;
        line-height: 120%;
        color: black;
    }
`;