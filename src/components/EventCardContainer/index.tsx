import EventCard from "../EventCard";
import EventCardAdmin from "../EventCardAdmin";
import { Container } from "./styled";
import { useSession } from "next-auth/react";

interface EventCardContainerProps {
    isAdmin: boolean;
}

export default function EventCardContainer({ isAdmin }: EventCardContainerProps) {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            {session && session.user && (
                <div>
                    <h2>User Information:</h2>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                </div>
            )}
            {session && session.user.events && (
                <>
                    <h2>Events:</h2>
                    <ul>
                        {session.user.events.map((event, index) => (
                            <li key={event.id || index}>
                                <p>Name: {event.name}</p>
                                {event.date && (
                                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                )}
                                <p>Description: {event.description}</p>
                                <p>Address: {event.address}</p>
                                <p>Participants: {event.participants}/{event.maxPeople}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {isAdmin && <EventCardAdmin />}
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </Container>
    );
}