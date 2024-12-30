import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 16px;
    padding: 10px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    .availableEvents {
        display: flex;
        gap: 2px;
        align-items: baseline;

        h2 {
            color: white;
            font-size: 18px;
            font-weight: bold;
            line-height: 120%;
        }
        
        h5 {
            color: var(--grayZaori);
            font-size: 10px;
            font-weight: bold;
            line-height: 120%;
        }

        @media (min-width: 768px) {
            h2 {
                font-size: 20px;
            }
            
            h5 {
                font-size: 12px;
            }
        }

        @media (min-width: 1024px) {
            h2 {
                font-size: 24px;
            }
            
            h5 {
                font-size: 14px;
            }
        }
    }

    .rightContent {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .sortButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        h3 {
            font-size: 14px;
            font-weight: normal;
            line-height: 120%;
            color: white;
        }

        .icon {
            width: 12px;
            height: 12px; 
            color: var(--primaryDarkZaori);
        }

        @media (min-width: 768px) {
            h3 {
                font-size: 16px;
            }

            .icon {
                width: 16px;
                height: 16px; 
            }
        }

        @media (min-width: 1024px) {
            h3 {
                font-size: 18px;
            }

            .icon {
                width: 18px;
                height: 18px; 
            }
        }
    }
`;

export const CreateEventButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: var(--primaryDarkZaori);
    border: none;
    border-radius: 20px;
    color: var(--darkZaori);
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 200px;

    .icon {
        width: 16px;
        height: 16px;
    }

    &:hover {
        background-color: var(--darkZaori);
        color: var(--primaryDarkZaori);

        .icon {
            transform: rotate(90deg);
        }
    }

    @media (min-width: 768px) {
        width: auto;
        font-size: 15px;
        padding: 10px 18px;

        .icon {
            width: 17px;
            height: 17px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 16px;
        padding: 12px 20px;

        .icon {
            width: 18px;
            height: 18px;
        }
    }
`;