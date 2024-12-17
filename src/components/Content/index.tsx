import EventCardContainer from "../EventCardContainer";
import EventsFrame from "../EventsFrame";
import { Container } from "./styled";

export default function Content() {
    return (
        <Container>
            <EventsFrame/>
            <EventCardContainer/>
        </Container>
    )
}