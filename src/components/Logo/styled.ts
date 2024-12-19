import styled from "styled-components";
import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700']
})

export const Container = styled.div` 
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;

    .logoIcon {
        width: 24px;
        height: 24px;  
        color: var(--primaryDarkZaori); 
        stroke-width: 2.5px;
    }


    > h1 {
        color: var(--primaryLightZaori);
        font-family: ${caveat.style.fontFamily};
        font-size: 24px;
        font-weight: 700;
        line-height: 120%;
    }

    @media (min-width: 768px) {
        .logoIcon {
            width: 48px;
            height: 48px;  
            color: var(--primaryDarkZaori); 
            stroke-width: 2.5px;
        }

        > h1 {
            font-size: 48px;
            line-height: 110%;
        }
    }
    
    @media (min-width: 1440px) {
        .logoIcon {
            width: 56px;
            height: 56px;  
            color: var(--primaryDarkZaori); 
            stroke-width: 2.5px;
        }

        > h1 {
            font-size: 56px;
            line-height: 110%;
        }
    }
`;