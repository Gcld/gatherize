import EventCard from "../EventCard";
import EventCardAdmin from "../EventCardAdmin";
import { Container } from "./styled";
import { useSession } from "next-auth/react";

export default function EventCardContainer() {
    
    const { data: session } = useSession();
    console.log("SESSION: ", session);

    return (
        <Container>
            {session && session.user?.name}
            <EventCardAdmin/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </Container>
    );
}