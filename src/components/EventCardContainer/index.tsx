import EventCard from "../EventCard";
import { Container } from "./styled";

export default function EventCardContainer() {
    return (
        <Container>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    );
}