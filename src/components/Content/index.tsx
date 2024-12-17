import EventCard from "../EventCard";
import EventsFrame from "../EventsFrame";
import { Container } from "./styled";

export default function Content() {
    return (
        <Container>
            <EventsFrame/>
            <EventCard/>
        </Container>
    )
}