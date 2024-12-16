import { LuAlignJustify, LuFilter, LuSearch } from "react-icons/lu";
import Logo from "../Logo";
import { Container, FilterButton, LogoAndMenu, SearchAndFilter, Searchbar, SearchDiv } from "./styled";

export default function Header() {
    return (
        <Container>
            <LogoAndMenu>
                <Logo/>
                <LuAlignJustify color="white" size={24}/>
            </LogoAndMenu>
            <SearchAndFilter>
                <SearchDiv>
                    <LuSearch color="var(--primaryDarkZaori)" size={12}/>
                    <Searchbar type="text" id="searchbar" placeholder="Search event"></Searchbar>
                </SearchDiv>
                <FilterButton><LuFilter/></FilterButton>
            </SearchAndFilter>
        </Container>
    );
}