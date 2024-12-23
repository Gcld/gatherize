import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 15px;
    width: 100%;
    place-items: center;

    @media (min-width: 768px){
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }

    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
    }
`;
