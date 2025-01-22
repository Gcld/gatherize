import { useSession } from "next-auth/react";
import EventCardContainer from "../EventCardContainer";
import EventsFrame from "../EventsFrame";
import { Container, UserInfoContainer } from "./styled";
import { useState, useEffect } from "react";
import CreateEventModal from "../CreateEventModal";
import { LuPlus } from "react-icons/lu";
import { CreateEventButton } from "../EventsFrameAdmin/styled";
import { fetchEvents } from '@/utils/api';
import { GatherizeEvent } from '@/types/event';

export default function Content() {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [events, setEvents] = useState<GatherizeEvent[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<GatherizeEvent[]>([]);

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
                setFilteredEvents(fetchedEvents);
            } catch (error) {
                console.error('Failed to load events:', error);
            }
        }
        loadEvents();
    }, []);

    useEffect(() => {
        const handleFilter = (event: CustomEvent<'upcoming' | 'availableSpots' | 'myEvents'>) => {
            const filterType = event.detail;
            let filtered: GatherizeEvent[];

            switch (filterType) {
                case 'upcoming':
                    const now = new Date();
                    filtered = events.filter(event => new Date(event.date) > now)
                        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    break;
                case 'availableSpots':
                    filtered = events.filter(event => event.participants < event.maxPeople);
                    break;
                case 'myEvents':
                    filtered = events.filter(event => event.creatorId === session?.user.id);
                    break;
                default:
                    filtered = events;
            }

            setFilteredEvents(filtered);
        };

        window.addEventListener('filterEvents', handleFilter as EventListener);

        return () => {
            window.removeEventListener('filterEvents', handleFilter as EventListener);
        };
    }, [events, session]);

    const handleCreateEvent = () => {
        setIsCreateEventModalOpen(true);
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <EventsFrame events={filteredEvents} setEvents={setFilteredEvents} />
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
            <EventCardContainer isAdmin={isAdmin} events={filteredEvents} />
            {isAdmin && (
                <CreateEventModal
                    isOpen={isCreateEventModalOpen}
                    onClose={() => setIsCreateEventModalOpen(false)}
                />
            )}
        </Container>
    )
}