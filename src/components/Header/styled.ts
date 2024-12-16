import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 8px 8px;
    gap: 8px;
    background-color: var(--darkZaori);
    border-radius: 0 0 15px 15px;
`;

export const LogoAndMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const SearchAndFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5px;
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5px;
    border-radius: 9px;
    border: 1px solid var(--grayZaori);
    padding: 5px;
`;

export const Searchbar = styled.input`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-family: Arial, FontAwesome;
    border-radius: 9px;
    border: none;
    font-size: 10px;
`;

export const FilterButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var(--grayZaori);
    color: var(--primaryDarkZaori);
`;