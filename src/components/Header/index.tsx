import React, { useState } from 'react';
import { LuAlignJustify, LuFilter, LuSearch } from "react-icons/lu";
import Logo from "../Logo";
import { Container, FilterButton, LogoAndMenu, SearchAndFilter, Searchbar, SearchDiv } from "./styled";
import MenuModal from "../MenuModal";
import FilterModal from "../FilterModal";

export default function Header() {
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const toggleMenuModal = () => {
        setIsMenuModalOpen(!isMenuModalOpen);
    };

    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };

    return (
        <Container>
            <LogoAndMenu>
                <Logo />
                <LuAlignJustify className="burguerIcon" onClick={toggleMenuModal}/>
            </LogoAndMenu>
            <SearchAndFilter>
                <SearchDiv>
                    <LuSearch className="searchIcon"/>
                    <Searchbar type="text" id="searchbar" placeholder="Search event"></Searchbar>
                </SearchDiv>
                <FilterButton onClick={toggleFilterModal}>
                    <LuFilter className="filterIcon"/>
                </FilterButton>
            </SearchAndFilter>
            <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
            <FilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />
        </Container>
    );
}