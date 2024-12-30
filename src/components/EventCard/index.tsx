import React from 'react';
import { LuCircleUser, LuMapPin, LuCircleCheck, LuX } from 'react-icons/lu';
import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';
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
            <Container as='a'>
                <EventCardPicture>
                    <EventDate>
                        <h3>19</h3>
                        <h5>Dec</h5>
                    </EventDate>
                </EventCardPicture>
                <EventContent>
                    <h1>Headline 1</h1>
                    <EventLocation>
                        <LuMapPin size={14} color='var(--darkZaori)' aria-hidden='true' />
                        <h4>Nova Parnamirim, RN</h4>
                    </EventLocation>
                    <EventInfo>
                        <Users>
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                            <LuCircleUser size={16} color='black' aria-hidden='true' />
                        </Users>
                        <Participants>
                            <h3>6 participants</h3>
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