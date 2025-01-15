import React from 'react';
import { LuCircleUser, LuMapPin, LuCircleCheck, LuX } from 'react-icons/lu';
import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    Container,
    EventButton,
    EventCardPicture,
    EventContent,
    EventDate,
    EventInfo,
    EventLocation,
    Participants,
    Users
} from './styled';

interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    cep: string;
    address: string;
    city: string;
    state: string;
    maxPeople: number;
    participants: number;
}

interface EventCardProps {
    event: Event;
}

export default function EventCard({ event }: EventCardProps) {
    console.log('Event data in EventCard:', event);
    const { toggleSubscription, isSubscribed } = useSubscription();
    const { data: session } = useSession();
    const router = useRouter();

    const handleSubscribe = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!session) {
            router.push('/login');
        } else {
            toggleSubscription(event.id);
        }
    };

    const eventSubscribed = isSubscribed(event.id);
    const eventDate = new Date(event.date);

    return (
        <Link href={`/event/${event.id}`} passHref legacyBehavior>
            <Container as='a'>
                <EventCardPicture>
                    <EventDate>
                        <h3>{eventDate?.getDate()}</h3>
                        <h5>{eventDate?.toLocaleString('default', { month: 'short' })}</h5>
                    </EventDate>
                </EventCardPicture>
                <EventContent>
                    <h1>{event?.name}</h1>
                    <EventLocation>
                        <LuMapPin size={14} color='var(--darkZaori)' aria-hidden='true' />
                        <h4>{`${event?.address || ''}, ${event?.city || ''}, ${event?.state || ''}`}</h4>
                    </EventLocation>
                    <EventInfo>
                        <Users>
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                        </Users>
                        <Participants>
                            <h3>{event?.participants || 0} participants</h3>
                        </Participants>
                    </EventInfo>
                </EventContent>
                <EventButton
                    onClick={handleSubscribe}
                    $isSubscribed={eventSubscribed}
                    aria-label={eventSubscribed ? 'Cancel subscription' : 'Sign up for event'}
                >
                    {eventSubscribed ? (
                        <LuX className='subscribeIcon' aria-hidden='true' />
                    ) : (
                        <LuCircleCheck className='subscribeIcon' aria-hidden='true' />
                    )}
                    <h2>{eventSubscribed ? 'Cancel Subscription' : 'Sign Up'}</h2>
                </EventButton>
            </Container>
        </Link>
    );
}