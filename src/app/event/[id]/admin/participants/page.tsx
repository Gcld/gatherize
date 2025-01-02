'use client';

import React from 'react';
import { LuArrowLeft, LuShare } from 'react-icons/lu';
import Link from 'next/link';
import Header from '@/components/Header';
import {
    Container,
    EventButton,
    EventButtonsDiv,
    EventPicture,
    TitleAndDescriptionDiv,
    DesktopOnly,
    EventContent,
    ParticipantsList,
    Participant,
    DownloadButton,
    DownloadButtonsDiv,
} from './styled';

export default function EventParticipants() {
    const participants = [
        'Jane Cooper',
        'Wade Warren',
        'Cameron Williamson',
        'Jacob Jones',
    ];

    const handleDownloadPDF = () => {
        console.log('Download PDF clicked');
        // Implementação futura para download de PDF
    };

    const handleDownloadCSV = () => {
        console.log('Download CSV clicked');
        // Implementação futura para download de CSV
    };

    return (
        <Container>
            <DesktopOnly>
                <Header />
            </DesktopOnly>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href="/" passHref>
                        <EventButton>
                            <LuArrowLeft className="icon" />
                        </EventButton>
                    </Link>
                    <EventButton>
                        <LuShare className="icon" />
                    </EventButton>
                </EventButtonsDiv>
            </EventPicture>
            <EventContent>
                <TitleAndDescriptionDiv>
                    <h1>Headline 1</h1>
                    <h4>Description event</h4>
                </TitleAndDescriptionDiv>
                <ParticipantsList>
                    {participants.map((participant, index) => (
                        <Participant key={index}>{participant}</Participant>
                    ))}
                </ParticipantsList>
                <DownloadButtonsDiv>
                    <DownloadButton onClick={handleDownloadPDF}>Download PDF</DownloadButton>
                    <DownloadButton onClick={handleDownloadCSV}>Download CSV</DownloadButton>
                </DownloadButtonsDiv>
            </EventContent>
        </Container>
    );
}