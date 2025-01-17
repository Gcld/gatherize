import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 20px;
`;

export const UserInfoContainer = styled.div`
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;

    h2 {
        margin-bottom: 10px;
    }

    p {
        margin: 5px 0;
    }
`;