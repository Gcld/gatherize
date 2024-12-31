'use client';

import React, { useState } from 'react';
import { LuArrowLeft, LuClipboardPen, LuShare, LuTrash2, LuUsers} from "react-icons/lu";
import Link from 'next/link';
import { EventButton, EventDescriptionAndButtonDiv, SubscribeButton } from './styled';
import { Container, EventButtonsDiv, EventDateAndLocationDiv, EventDescriptionDiv, EventPicture, TextBlock, TitleAndDescriptionDiv } from '../styled';
import EditEventModal from '@/components/EditEventModal';

export default function EventDetailAdmin(){
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [eventData, setEventData] = useState({
        name: "Headline 1",
        description: "Event description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie euismod interdum. Aenean vel est tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ut risus non...",
        date: "2023-12-09",
        address: "Nova Parnamirim, Zona Abissal",
        maxPeople: 100
    });

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    return (
        <Container>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref><EventButton><LuArrowLeft className="icon"/></EventButton></Link>
                    <EventButton onClick={handleEditClick}>
                        <LuClipboardPen className="icon"/>
                        <h3>Edit Event</h3>
                    </EventButton>
                    <EventButton>
                        <LuTrash2 className="icon"/>
                        <h3>Delete Event</h3>
                    </EventButton>
                    <EventButton><LuShare className="icon"/></EventButton>
                </EventButtonsDiv>
            </EventPicture>
            <TitleAndDescriptionDiv>
                <h1>{eventData.name}</h1>
                <h4>{eventData.description}</h4>
            </TitleAndDescriptionDiv>
            <EventDateAndLocationDiv>
                <TextBlock>
                    <h5>Date:</h5>
                    <h6>Monday, Dec 9</h6>
                    <h6>6:00 PM</h6>
                </TextBlock>
                <TextBlock>
                    <h5>Location:</h5>
                    <h6>{eventData.address}</h6>
                </TextBlock>
            </EventDateAndLocationDiv>
            <EventDescriptionAndButtonDiv>
                <EventDescriptionDiv>
                    <TextBlock>
                        <h4>About event</h4>
                        <h6>{eventData.description}</h6>
                    </TextBlock>
                </EventDescriptionDiv>
                <SubscribeButton>
                    <LuUsers className='participantsIcon'/>
                    <h1>View Participants</h1>
                </SubscribeButton>
            </EventDescriptionAndButtonDiv>
            <EditEventModal 
                isOpen={isEditModalOpen} 
                onClose={() => setIsEditModalOpen(false)} 
                eventData={eventData}
            />
        </Container>
    )
}