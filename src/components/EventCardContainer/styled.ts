import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 20px;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-content: center;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(280px, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(280px, 1fr));
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, minmax(280px, 1fr));
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
    padding: 8px 12px;
    border: none;
    background-color: ${props => props.$isActive ? 'var(--primaryDarkZaori)' : 'var(--darkZaori)'};
    color: ${props => props.$isActive ? 'var(--darkZaori)' : 'var(--primaryLightZaori)'};
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: var(--darkZaori);
    }
`;