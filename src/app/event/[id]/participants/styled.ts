import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
`;

export const EventPicture = styled.div`
    width: 100%;
    height: 200px;
    background-color: var(--primaryLightZaori);
    padding: 20px;

    @media (min-width: 768px) {
        height: 250px;
    }
`;

export const EventButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const EventButton = styled.button`
    background-color: var(--darkZaori);
    color: var(--primaryDarkZaori);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: var(--darkZaori);
    }

    .icon {
        font-size: 20px;
    }
`;

export const EventContent = styled.div`
    padding: 20px;
    flex-grow: 1;
`;

export const TitleAndDescriptionDiv = styled.div`
    margin-bottom: 30px;

    h1 {
        font-size: 24px;
        color: var(--foreground);
        margin-bottom: 10px;
    }

    h4 {
        font-size: 16px;
        color: var(--grayZaori);
    }

    @media (min-width: 768px) {
        h1 {
            font-size: 32px;
        }

        h4 {
            font-size: 18px;
        }
    }
`;

export const ParticipantsContainer = styled.div`
    background-color: var(--darkZaori);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ParticipantsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        font-size: 20px;
        color: var(--primaryLightZaori);
    }

    p {
        font-size: 14px;
        color: var(--grayZaori);
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    margin-bottom: 20px;

    .searchIcon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--grayZaori);
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: 1px solid var(--grayZaori);
    border-radius: 5px;
    font-size: 16px;
    background-color: var(--background);
    color: var(--foreground);

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }
`;

export const ParticipantsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
`;

export const Participant = styled.div`
    padding: 10px;
    background-color: var(--primaryLightZaori);
    color: var(--darkZaori);
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;

    span {
        color: var(--primaryLightZaori);
    }
`;

export const PaginationButton = styled.button`
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
        background-color: var(--grayZaori);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const DownloadButtonsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--grayZaori);
    }

    .icon {
        margin-right: 10px;
    }
`;

export const NoParticipantsMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    text-align: center;
    
    .icon {
        font-size: 48px;
        color: var(--grayZaori);
        margin-bottom: 20px;
    }

    h3 {
        font-size: 20px;
        color: var(--foreground);
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: var(--grayZaori);
    }
`;