import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 30px;

    @media (min-width: 768px) {
        gap: 40px;
    }

    @media (min-width: 1024px) {
        gap: 50px;
    }
`;

export const UserInfoContainer = styled.div`
    padding: 20px;
    border-radius: 8px;
    background-color: var(--primaryLightZaori);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;

    h2 {
        margin-bottom: 15px;
        color: var(--darkZaori);
        font-size: 1.2rem;
    }

    p {
        margin: 10px 0;
        color: var(--darkZaori);
        font-size: 1rem;
    }

    @media (min-width: 768px) {
        padding: 25px;

        h2 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (min-width: 1024px) {
        padding: 30px;

        h2 {
            font-size: 1.6rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`;