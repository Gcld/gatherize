import React, { useState } from 'react';
import { LuAlignJustify, LuFilter, LuSearch } from "react-icons/lu";
import Logo from "../Logo";
import { Container, FilterButton, LogoAndMenu, SearchAndFilter, Searchbar, SearchDiv } from "./styled";
import MenuModal from "../MenuModal";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Container>
            <LogoAndMenu>
                <Logo/>
                <LuAlignJustify className="burguerIcon" onClick={toggleModal}/>
            </LogoAndMenu>
            <SearchAndFilter>
                <SearchDiv>
                    <LuSearch className="searchIcon"/>
                    <Searchbar type="text" id="searchbar" placeholder="Search event"></Searchbar>
                </SearchDiv>
                <FilterButton><LuFilter className="filterIcon"/></FilterButton>
            </SearchAndFilter>
            <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Container>
    );
}