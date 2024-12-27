import EventCard from "../EventCard";
import EventCardAdmin from "../EventCardAdmin";
import { Container } from "./styled";

export default function EventCardContainer() {
    return (
        <Container>
            <EventCardAdmin/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    );
}