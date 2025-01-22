import React from 'react';
import { LuCircleUser, LuMapPin, LuCircleCheck, LuX, LuEye, LuCircleAlert } from 'react-icons/lu';
import { GatherizeEvent } from '@/types/event';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    CardLink,
    Container,
    EventButton,
    EventCardPicture,
    EventContent,
    EventDate,
    EventInfo,
    EventLocation,
    Participants,
    UnavailableButton,
    Users
} from './styled';
import { toast } from 'react-toastify';

interface EventCardProps {
    event: GatherizeEvent;
    isAdmin?: boolean;
}

export default function EventCard({ event }: EventCardProps) {
    console.log('Event data in EventCard:', event);
    const { toggleSubscription, isSubscribed } = useSubscription();
    const { data: session } = useSession();
    const router = useRouter();

    const handleSubscribe = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!session) {
            router.push('/login');
        } else {
            toggleSubscription(event.id);
            if (eventSubscribed) {
                toast.success('Successfully unsubscribed from the event!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } else {
                toast.success('Successfully subscribed to the event!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        }
    };

    const eventSubscribed = isSubscribed(event.id);
    const eventDate = new Date(event.date);
    const isEventCreator = session?.user.id === event.creatorId;
    const isPastEvent = eventDate < new Date();
    const isFullyBooked = event.participants >= event.maxPeople;
    const isUnavailable = isPastEvent || isFullyBooked;

    const cardContent = (
        <>
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
            {isEventCreator ? (
                <EventButton
                    $isCreator={true}
                    aria-label="View my event"
                >
                    <LuEye className='subscribeIcon' aria-hidden='true' />
                    <h2>View My Event</h2>
                </EventButton>
            ) : isUnavailable ? (
                <UnavailableButton>
                    <LuCircleAlert className='subscribeIcon' aria-hidden='true' />
                    <h2>{isPastEvent ? 'Past Event' : 'Fully Booked'}</h2>
                </UnavailableButton>
            ) : (
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
            )}
        </>
    );

    return (
        <CardLink href={`/event/${event.id}`} passHref>
            <Container>
                {cardContent}
            </Container>
        </CardLink>
    );
}