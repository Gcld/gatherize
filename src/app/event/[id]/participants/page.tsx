'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LuArrowLeft, LuShare, LuDownload, LuUserX } from 'react-icons/lu';
import Link from 'next/link';
import {
    Container,
    EventButton,
    EventButtonsDiv,
    EventPicture,
    TitleAndDescriptionDiv,
    EventContent,
    ParticipantsList,
    Participant,
    DownloadButton,
    DownloadButtonsDiv,
    NoParticipantsMessage,
} from './styled';
import { fetchEventById } from '@/utils/api';
import { GatherizeEvent } from '@/types/event';
import { useSession } from 'next-auth/react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
interface AutoTableOptions {
    head: string[][];
    body: (string | number)[][];
    [key: string]: unknown;
}

declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: AutoTableOptions) => jsPDF;
    }
}

export default function EventParticipants() {
    const { data: session, status } = useSession();
    const params = useParams();
    const router = useRouter();
    const [event, setEvent] = useState<GatherizeEvent | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadEvent() {
            const eventId = typeof params.id === 'string' ? parseInt(params.id) : -1;
            if (eventId !== -1) {
                try {
                    const eventData = await fetchEventById(eventId);
                    setEvent(eventData);
                } catch (error) {
                    console.error('Error loading event:', error);
                    setError('Failed to load event. Please try again later.');
                }
            }
        }
        loadEvent();
    }, [params.id]);

    const handleDownloadCSV = () => {
        if (event && event.participants.length > 0) {
            const csv = Papa.unparse(event.participants);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            saveAs(blob, `${event.name}_participants.csv`);
        }
    };

    const handleDownloadPDF = () => {
        if (event && event.participants.length > 0) {
            const doc = new jsPDF();
            doc.text(`Participants for ${event.name}`, 10, 10);
            doc.autoTable({
                head: [['Name', 'ID']],
                body: event.participants.map(p => [p.name, p.id]),
            });
            doc.save(`${event.name}_participants.pdf`);
        }
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/login');
        return null;
    }

    if (session.user.id !== event.creatorId) {
        router.push('/denied');
        return null;
    }

    return (
        <Container>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href={`/event/${event.id}`} passHref>
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
                    <h1>{event.name}</h1>
                    <h4>{event.description}</h4>
                </TitleAndDescriptionDiv>
                {event.participants.length > 0 ? (
                    <>
                        <ParticipantsList>
                            {event.participants.map((participant, index) => (
                                <Participant key={index}>{participant.name}</Participant>
                            ))}
                        </ParticipantsList>
                        <DownloadButtonsDiv>
                            <DownloadButton onClick={handleDownloadPDF}>
                                <LuDownload className="icon" />
                                Download PDF
                            </DownloadButton>
                            <DownloadButton onClick={handleDownloadCSV}>
                                <LuDownload className="icon" />
                                Download CSV
                            </DownloadButton>
                        </DownloadButtonsDiv>
                    </>
                ) : (
                    <NoParticipantsMessage>
                        <LuUserX className="icon" />
                        <h3>No participants yet</h3>
                        <p>Be the first to join this event!</p>
                    </NoParticipantsMessage>
                )}
            </EventContent>
        </Container>
    );
}