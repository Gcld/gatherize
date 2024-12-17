import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .availableEvents{
        display: flex;
        gap: 2px;

        h2{
            color: white;
            font-size: 16px;
            font-weight: bold;
            line-height: 120%;
        }
        
        h5{
            color: var(--grayZaori);
            font-size: 8px;
            font-weight: bold;
            line-height: 120%;
        }
    }

    .sortButton{
        display: flex;
        flex-direction: row;
        align-items: center;

        h3{
            font-size: 14px;
            font-weight: normal;
            line-height: 120%;
            color: white;
        }
    }
`;  