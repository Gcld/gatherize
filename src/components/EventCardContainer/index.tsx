import EventCard from "../EventCard";
import EventCardAdmin from "../EventCardAdmin";
import { Container } from "./styled";
import { useSession } from "next-auth/react";

export default function EventCardContainer() {
    
    const { data: session } = useSession();
    console.log("SESSION: ", session);

    return (
        <Container>
            <ul>
            {session && session.events?.map(event => (
                <>
                    <li>{event.name}</li>
                    <li>{`${event.date?.getDate()}/${event.date?.getMonth()}/${event.date?.getFullYear()}`}</li>
                </>
            ))}
            </ul>
            <EventCardAdmin/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    );
}