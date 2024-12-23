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

        .icon{
            width: 12px;
            height: 12px; 
            color: var(--primaryDarkZaori);
        }
    }

    @media (min-width: 768px){
        padding: 10px;
        .availableEvents{
            h2{
                font-size: 18px;
            }
            
            h5{
                font-size: 12px;
            }
        }

        .sortButton{
            h3{
                font-size: 16px;
            }

            .icon{
                width: 16px;
                height: 16px; 
            }
        }
    }

    @media (min-width: 1024px){
        padding: 10px 0px;
        .availableEvents{
            h2{
                font-size: 24px;
            }
            
            h5{
                font-size: 16px;
            }
        }

        .sortButton{
            h3{
                font-size: 18px;
            }

            .icon{
                width: 20px;
                height: 20px; 
            }
        }
    }
`;  