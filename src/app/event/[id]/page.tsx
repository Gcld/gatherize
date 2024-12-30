'use client';

import React from 'react';
import { LuArrowLeft, LuCircleCheck, LuShare, LuX } from "react-icons/lu";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Link from 'next/link';
import Header from "@/components/Header";
import {
    Container,
    EventButton,
    EventButtonsDiv,
    EventDateAndLocationDiv,
    EventDescriptionAndButtonDiv,
    EventDescriptionDiv,
    EventPicture,
    SubscribeButton,
    TextBlock,
    TitleAndDescriptionDiv,
    DesktopOnly,
    EventContent
} from "./styled";

export default function EventDetail() {
    const temporaryEventId = 1;
    const { toggleSubscription, isSubscribed } = useSubscription();
    const eventSubscribed = isSubscribed(temporaryEventId);

    const handleSubscribe = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        toggleSubscription(temporaryEventId);
    };


    return (
        <Container>
            <DesktopOnly>
                <Header />
            </DesktopOnly>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref><EventButton><LuArrowLeft className="icon" /></EventButton></Link>
                    <EventButton><LuShare className="icon" /></EventButton>
                </EventButtonsDiv>
            </EventPicture>
            <EventContent>
                <TitleAndDescriptionDiv>
                    <h1>Headline 1</h1>
                    <h4>Description event</h4>
                </TitleAndDescriptionDiv>
                <EventDateAndLocationDiv>
                    <TextBlock>
                        <h5>Date:</h5>
                        <h6>Monday, Dec 9</h6>
                        <h6>6:00 PM</h6>
                    </TextBlock>
                    <TextBlock>
                        <h5>Location:</h5>
                        <h6>Nova Parnamirim</h6>
                        <h6>Zona Abissal</h6>
                    </TextBlock>
                </EventDateAndLocationDiv>
            </EventContent>
                <EventDescriptionAndButtonDiv $isSubscribed={eventSubscribed} onClick={(e) => handleSubscribe(e)}>
                    <EventDescriptionDiv>
                        <TextBlock>
                            <h4>About event</h4>
                            <h6>Event description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie euismod interdum. Aenean vel est tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ut risus non... </h6>
                        </TextBlock>
                    </EventDescriptionDiv>
                <SubscribeButton
                    $isSubscribed={eventSubscribed}
                    onClick={(e) => handleSubscribe(e)}
                >
                    {eventSubscribed ? (
                        <LuX className="subscribeIcon" />
                    ) : (
                        <LuCircleCheck className="subscribeIcon" />
                    )}
                    <h1>{eventSubscribed ? 'Cancel Subscription' : 'Subscribe'}</h1>
                </SubscribeButton>
            </EventDescriptionAndButtonDiv>
        </Container>
    )
}