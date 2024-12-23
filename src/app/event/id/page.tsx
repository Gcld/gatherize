'use client';

import { LuArrowLeft, LuCircleCheck, LuShare } from "react-icons/lu";
import { Container, EventButton, EventButtonsDiv, EventDateAndLocationDiv, EventDescriptionAndButtonDiv, EventDescriptionDiv, EventPicture, SubscribeButton, TextBlock, TitleAndDescriptionDiv } from "./styled";

export default function EventDetail(){
    return (
        <Container>
            <EventPicture>
                <EventButtonsDiv>
                    <EventButton><LuArrowLeft className="icon"/></EventButton>
                    <EventButton><LuShare className="icon"/></EventButton>
                </EventButtonsDiv>
            </EventPicture>
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
            <EventDescriptionAndButtonDiv>
                <EventDescriptionDiv>
                    <TextBlock>
                        <h4>About event</h4>
                        <h6>Event description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie euismod interdum. Aenean vel est tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque ut risus non... </h6>
                    </TextBlock>
                </EventDescriptionDiv>
                <SubscribeButton>
                    <LuCircleCheck className="subscribeIcon"/>
                    <h1>Subscribe</h1>
                </SubscribeButton>
            </EventDescriptionAndButtonDiv>
        </Container>
    )
}