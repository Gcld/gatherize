'use client';

import { LuCircleUser, LuMapPin, LuEye } from "react-icons/lu";
import Link from "next/link";

import { EventButton } from "./styled";
import { Container, EventCardPicture, EventContent, EventDate, EventInfo, EventLocation, Participants, Users } from "../EventCard/styled";

export default function EventCardAdmin() {
    const temporaryEventId = 1; 


    return (
        <Link href={`/event/${temporaryEventId}`} passHref legacyBehavior>
            <Container as="a">
                <EventCardPicture>
                    <EventDate>
                        <h3>19</h3>
                        <h5>Dec</h5>
                    </EventDate>
                </EventCardPicture>
                <EventContent>
                    <h1>Headline 1</h1>
                    <EventLocation>
                        <LuMapPin size={14} color="var(--darkZaori)"/>
                        <h4>Nova Parnamirim, RN</h4>
                    </EventLocation>
                    <EventInfo>
                        <Users>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                        </Users>
                        <Participants>
                            <h3>6 participants</h3>
                        </Participants>
                    </EventInfo>
                </EventContent>
                <EventButton>
                    <LuEye className="subscribeIcon"/>
                    <h2>View My Event</h2>
                </EventButton>
            </Container>
        </Link>
    )
}