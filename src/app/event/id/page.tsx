'use client';

import { LuArrowLeft, LuShare } from "react-icons/lu";
import { Container, EventButton, EventButtonsDiv, EventPicture } from "./styled";

export default function EventDetail(){
    return (
        <Container>
            <EventPicture>
                <EventButtonsDiv>
                    <EventButton><LuArrowLeft color="var(--primaryDarkZaori)" size={19}/></EventButton>
                    <EventButton><LuShare color="var(--primaryDarkZaori)" size={19}/></EventButton>
                </EventButtonsDiv>
            </EventPicture>
        </Container>
    )
}