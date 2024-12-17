import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--darkZaori);
    padding: 20px 0;

    h4{
        font-size: 12px;
        font-weight: bold;
        line-height: 120%;
        color: var(--primaryLightZaori);
    }
`;