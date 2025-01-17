import { useSession } from "next-auth/react";
import EventCardContainer from "../EventCardContainer";
import EventsFrame from "../EventsFrame";
import { Container, UserInfoContainer } from "./styled";
import { useState, useEffect } from "react";
import CreateEventModal from "../CreateEventModal";
import { LuPlus } from "react-icons/lu";
import { CreateEventButton } from "../EventsFrameAdmin/styled";
import { fetchEvents } from '@/utils/api';
import { Event } from '@/types/event';

export default function Content() {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        if (session?.user.role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [session]);

    useEffect(() => {
        async function loadEvents() {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Failed to load events:', error);
            }
        }
        loadEvents();
    }, []);

    const handleCreateEvent = () => {
        setIsCreateEventModalOpen(true);
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <EventsFrame events={events} setEvents={setEvents} />
            {session && session.user && (
                <UserInfoContainer>
                    <h2>User Information:</h2>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <p>Role: {session.user.role}</p>
                </UserInfoContainer>
            )}
            {isAdmin && (
                <CreateEventButton onClick={handleCreateEvent}>
                    <LuPlus className="icon" />
                    <span>Create Event</span>
                </CreateEventButton>
            )}
            <EventCardContainer isAdmin={isAdmin} events={events} />
            {isAdmin && (
                <CreateEventModal
                    isOpen={isCreateEventModalOpen}
                    onClose={() => setIsCreateEventModalOpen(false)}
                />
            )}
        </Container>
    )
}