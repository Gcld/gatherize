'use client';

import { LuCircleUser, LuMapPin, LuCircleCheck, LuX } from "react-icons/lu";
import Link from "next/link";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Container, EventButton, EventCardPicture, EventContent, EventDate, EventInfo, EventLocation, Participants, Users } from "./styled";

export default function EventCard() {
    const temporaryEventId = 1; 
    const { toggleSubscription, isSubscribed } = useSubscription();
    const eventSubscribed = isSubscribed(temporaryEventId);

    const handleSubscribe = (e: React.MouseEvent) => {
        e.preventDefault(); 
        toggleSubscription(temporaryEventId);
    };

    return (
        <Link href={`/event/${temporaryEventId}`} passHref legacyBehavior>
            <Container as="a">
                <EventCardPicture>
                    <EventDate>
                        <h3>19</h3>
                        <h5>Dec</h5>
                    </EventDate>
                </EventCardPicture>
                <EventContent>
                    <h1>Headline 1</h1>
                    <EventLocation>
                        <LuMapPin size={14} color="var(--darkZaori)"/>
                        <h4>Nova Parnamirim, RN</h4>
                    </EventLocation>
                    <EventInfo>
                        <Users>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                            <LuCircleUser size={16} color="black"/>
                        </Users>
                        <Participants>
                            <h3>6 participants</h3>
                        </Participants>
                    </EventInfo>
                </EventContent>
                <EventButton 
                    onClick={handleSubscribe} 
                    $isSubscribed={eventSubscribed}
                >
                    {eventSubscribed ? (
                        <LuX className="subscribeIcon"/>
                    ) : (
                        <LuCircleCheck className="subscribeIcon"/>
                    )}
                    <h2>{eventSubscribed ? 'Cancel Subscription' : 'Sign Up'}</h2>
                </EventButton>
            </Container>
        </Link>
    )
}