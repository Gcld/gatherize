import { useSession } from "next-auth/react";
import EventCardContainer from "../EventCardContainer";
import EventsFrame from "../EventsFrame";
import { Container } from "./styled";
import { useState, useEffect } from "react";
import CreateEventModal from "../CreateEventModal";
import { LuPlus } from "react-icons/lu";
import { CreateEventButton } from "../EventsFrameAdmin/styled";

export default function Content() {
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);

    useEffect(() => {
        if (session?.user.role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [session]);

    const handleCreateEvent = () => {
        setIsCreateEventModalOpen(true);
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <EventsFrame />
            {isAdmin && (
                <CreateEventButton onClick={handleCreateEvent}>
                    <LuPlus className="icon" />
                    <span>Create Event</span>
                </CreateEventButton>
            )}
            <EventCardContainer isAdmin={isAdmin} />
            {isAdmin && (
                <CreateEventModal
                    isOpen={isCreateEventModalOpen}
                    onClose={() => setIsCreateEventModalOpen(false)}
                />
            )}
        </Container>
    )
}