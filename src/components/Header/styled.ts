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

    @media (min-width: 768px){
        padding: 8px 8px;
        gap: 8px;
    }
`;

export const LogoAndMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;

    .burguerIcon{
        color: white; 
        height: 24px;
        width: 24px;
    }

    @media (min-width: 768px){
        .burguerIcon{
            height: 32px;
            width: 32px;
        }
    }

    @media (min-width: 1440px){
        .burguerIcon{
            height: 48px;
            width: 48px;
        }
    }
`;

export const SearchAndFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5px;

    @media (min-width: 768px){
        gap: 8px;
    }

    @media (min-width: 1440px){
        gap: 10px;
    }
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

    .searchIcon{
            color: var(--primaryDarkZaori); 
            height: 12px;
            width: 12px;
        }

    @media (min-width: 768px){
        border-radius: 12px;
        gap: 10px;
        .searchIcon{
            color: "var(--primaryDarkZaori)"; 
            height: 20px;
            width: 20px;
        }
    }

    @media (min-width: 1440px){
        border-radius: 12px;
        gap: 10px;
        .searchIcon{
            color: "var(--primaryDarkZaori)"; 
            height: 24px;
            width: 24px;
        }
    }
`;

export const Searchbar = styled.input`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-family: Arial, FontAwesome;
    border-radius: 9px;
    border: none;
    font-size: 12px;
    justify-content: center;
    @media (min-width: 768px){
        font-size: 20px;
    }

    @media (min-width: 1440px){
        font-size: 24px;
    }
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

    @media (min-width: 768px){
        border-radius: 8px;
        .filterIcon{
            height: 26px;
            width: 26px;
        }
    }

    @media (min-width: 1440px){
        border-radius: 10px;
        .filterIcon{
            height: 31px;
            width: 31px;
        }
    }
`;