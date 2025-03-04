import { useSession } from "next-auth/react";
import EventCardContainer from "../EventCardContainer";
import EventsFrame from "../EventsFrame";
import { Container, ContentWrapper } from "./styled";
import { useState, useEffect } from "react";
import CreateEventModal from "../CreateEventModal";
import { LuPlus } from "react-icons/lu";
import { CreateEventButton } from "../EventsFrameAdmin/styled";
import { fetchEvents } from '@/utils/api';
import { GatherizeEvent } from '@/types/event';
import { useSubscription } from "@/contexts/SubscriptionContext";

export default function Content() {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
    const [events, setEvents] = useState<GatherizeEvent[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<GatherizeEvent[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { isSubscribed } = useSubscription();


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
        const handleSearch = (event: CustomEvent<string>) => {
            setSearchTerm(event.detail);
        };

        window.addEventListener('searchEvents', handleSearch as EventListener);

        return () => {
            window.removeEventListener('searchEvents', handleSearch as EventListener);
        };
    }, []);

    useEffect(() => {
        const filtered = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(filtered);
    }, [searchTerm, events]);

    useEffect(() => {
        const handleFilter = (event: CustomEvent<'upcoming' | 'availableSpots' | 'myEvents' | 'subscribedEvents' | null>) => {
            const filterType = event.detail;
            let filtered: GatherizeEvent[];

            switch (filterType) {
                case 'upcoming':
                    const now = new Date();
                    filtered = events.filter(event => new Date(event.date) > now)
                        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    break;
                case 'availableSpots':
                    filtered = events.filter(event => event.participants.length < event.maxPeople);
                    break;
                case 'myEvents':
                    filtered = events.filter(event => event.creatorId === session?.user.id);
                    break;
                case 'subscribedEvents':
                    filtered = events.filter(event => isSubscribed(event.id));
                    break;
                case null:
                    filtered = events;
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
    }, [events, session, isSubscribed]);

    const handleCreateEvent = () => {
        setIsCreateEventModalOpen(true);
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    const handleEventCreated = (newEvent: GatherizeEvent) => {
        setEvents(prevEvents => [...prevEvents, newEvent]);
        setFilteredEvents(prevEvents => [...prevEvents, newEvent]);
    };

    const handleEventUpdated = (updatedEvent: GatherizeEvent) => {
        setEvents(prevEvents => prevEvents.map(event => event.id === updatedEvent.id ? updatedEvent : event));
        setFilteredEvents(prevEvents => prevEvents.map(event => event.id === updatedEvent.id ? updatedEvent : event));
    };

    return (
        <Container>
            <ContentWrapper>
                <EventsFrame events={filteredEvents} setEvents={setFilteredEvents} />
                {isAdmin && (
                    <CreateEventButton onClick={handleCreateEvent}>
                        <LuPlus className="icon" />
                        <span>Create Event</span>
                    </CreateEventButton>
                )}
                <EventCardContainer
                    isAdmin={isAdmin}
                    events={filteredEvents}
                    onEventUpdated={handleEventUpdated}
                />
            </ContentWrapper>
            {isAdmin && (
                <CreateEventModal
                    isOpen={isCreateEventModalOpen}
                    onClose={() => setIsCreateEventModalOpen(false)}
                    onEventCreated={handleEventCreated}
                />
            )}
        </Container>
    )
}