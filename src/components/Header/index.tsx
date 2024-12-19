import { LuAlignJustify, LuFilter, LuSearch } from "react-icons/lu";
import Logo from "../Logo";
import { Container, FilterButton, LogoAndMenu, SearchAndFilter, Searchbar, SearchDiv } from "./styled";

export default function Header() {
    return (
        <Container>
            <LogoAndMenu>
                <Logo/>
                <LuAlignJustify className="burguerIcon"/>
            </LogoAndMenu>
            <SearchAndFilter>
                <SearchDiv>
                    <LuSearch className="searchIcon"/>
                    <Searchbar type="text" id="searchbar" placeholder="Search event"></Searchbar>
                </SearchDiv>
                <FilterButton><LuFilter className="filterIcon"/></FilterButton>
            </SearchAndFilter>
        </Container>
    );
}