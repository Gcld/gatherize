import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 200px;
    width: 100%;
    padding: 8px 8px;
    gap: 8px;
    background-color: var(--darkZaori);
    border-radius: 0 0 15px 15px;

    @media (min-width: 768px) {
        padding: 16px;
        gap: 16px;
    }
`;

export const LogoAndMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;

    .burguerButton {
        background-color: transparent;
        border: none;
        cursor: pointer;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .burguerIcon {
        color: white;
        height: 24px;
        width: 24px;

        @media (min-width: 768px) {
            height: 32px;
            width: 32px;
        }
    }
`;

export const DesktopMenu = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        gap: 32px;
    }
`;

export const MenuButton = styled.button`
    background: none;
    border: none;
    color: var(--primaryLightZaori);
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 8px;
    transition: all 0.3s ease;

    .icon {
        color: var(--primaryDarkZaori);
        width: 20px;
        height: 20px;
    }

    &:hover {
        transform: translateY(-2px);
        color: var(--primaryDarkZaori);

        .icon {
            transform: scale(1.1);
        }
    }

    @media (min-width: 1024px) {
        font-size: 20px; 
        gap: 12px; 
        padding: 12px; 

        .icon {
            width: 28px; 
            height: 28px;
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

    @media (min-width: 1024px){
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

    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:focus-within {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 0 2px var(--primaryDarkZaori);
    }

    .searchIcon{
            color: var(--primaryDarkZaori); 
            height: 12px;
            width: 12px;
        }

    @media (min-width: 768px){
        border-radius: 12px;
        .searchIcon{
            color: "var(--primaryDarkZaori)"; 
            height: 20px;
            width: 20px;
        }
    }

    @media (min-width: 1024px){
        border-radius: 12px;
        gap: 10px;
        .searchIcon{
            color: "var(--primaryDarkZaori)"; 
            height: 22px;
            width: 22px;
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
    outline: none;
    color: white;

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
    
    @media (min-width: 768px){
        font-size: 16px;
    }

    @media (min-width: 1024px){
        font-size: 20px;
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

    @media (min-width: 1024px){
        border-radius: 10px;
        .filterIcon{
            height: 31px;
            width: 31px;
        }
    }
`;