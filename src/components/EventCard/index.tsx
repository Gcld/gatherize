import { LuCircleUser, LuMapPin } from "react-icons/lu";
import { Container, EventCardPicture, EventContent, EventDate, EventInfo, EventLocation, Participants, Users } from "./styled";

export default function EventCard() {
    return (
        <Container>
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
                        <h2>6 participants</h2>
                    </Participants>
                </EventInfo>
            </EventContent>
        </Container>
    )
}