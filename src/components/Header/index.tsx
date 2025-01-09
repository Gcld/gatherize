import React, { useState, useEffect, useRef } from 'react';
import { LuAlignJustify, LuFilter, LuSearch, LuUser, LuSettings, LuLogOut } from 'react-icons/lu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Logo from '../Logo';
import MenuModal from '../MenuModal';
import FilterModal from '../FilterModal';
import { useWindowSize } from '@/hooks/useWindowSize';
import {
    Container,
    FilterButton,
    LogoAndMenu,
    SearchAndFilter,
    Searchbar,
    SearchDiv,
    DesktopMenu,
    MenuButton
} from './styled';

export default function Header() {
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const { width } = useWindowSize();
    const filterButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (width && width >= 1024) {
            setIsMenuModalOpen(false);
        }
    }, [width]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                filterButtonRef.current && 
                !filterButtonRef.current.contains(event.target as Node)
            ) {
                setIsFilterModalOpen(false);
            }
        };
    
        if (isFilterModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFilterModalOpen]);

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
                <DesktopMenu>
                    <Link href="/profile" passHref>
                        <MenuButton>
                            <LuUser className="icon" />
                            Profile
                        </MenuButton>
                    </Link>
                    <MenuButton onClick={() => signOut()}>
                        <LuLogOut className="icon" />
                        Logout
                    </MenuButton>
                    <MenuButton>
                        <LuSettings className="icon" />
                        Settings
                    </MenuButton>
                </DesktopMenu>
                <button
                    aria-label="Open menu"
                    onClick={toggleMenuModal}
                    className="burguerButton"
                >
                    <LuAlignJustify className="burguerIcon" />
                </button>
            </LogoAndMenu>
            <SearchAndFilter>
                <SearchDiv>
                    <LuSearch className="searchIcon" />
                    <Searchbar
                        type="text"
                        id="searchbar"
                        placeholder="Search event"
                        aria-label="Search for events"
                    />
                </SearchDiv>
                <FilterButton
                    ref={filterButtonRef}
                    onClick={toggleFilterModal}
                    aria-label="Open filters"
                    style={{ position: 'relative' }}
                >
                    <LuFilter className="filterIcon" />
                    {isFilterModalOpen && (
                        <FilterModal
                            isOpen={true}
                            onClose={() => setIsFilterModalOpen(false)}
                        />
                    )}
                </FilterButton>
            </SearchAndFilter>
            <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
            <FilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} />
        </Container>
    );
}