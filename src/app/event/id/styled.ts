import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const EventPicture = styled.div`
    width: 100%;
    height: 37vh;
    background-color: var(--primaryDarkZaori);
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