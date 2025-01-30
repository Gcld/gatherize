'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LuArrowLeft, LuDownload, LuUserX, LuSearch, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
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
    SearchInput,
    SearchWrapper,
    PaginationContainer,
    PaginationButton,
    ParticipantsContainer,
    ParticipantsHeader
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

const PARTICIPANTS_PER_PAGE = 20;

export default function EventParticipants() {
    const { data: session, status } = useSession();
    const params = useParams();
    const router = useRouter();
    const [event, setEvent] = useState<GatherizeEvent | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredParticipants, setFilteredParticipants] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        async function loadEvent() {
            const eventId = typeof params.id === 'string' ? parseInt(params.id) : -1;
            if (eventId !== -1) {
                try {
                    const eventData = await fetchEventById(eventId);
                    setEvent(eventData);
                    setFilteredParticipants(eventData.participants);
                } catch (error) {
                    console.error('Error loading event:', error);
                    setError('Failed to load event. Please try again later.');
                }
            }
        }
        loadEvent();
    }, [params.id]);

    useEffect(() => {
        if (event) {
            const filtered = event.participants.filter(participant =>
                participant.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredParticipants(filtered);
            setCurrentPage(1);
        }
    }, [searchTerm, event]);

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

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        window.scrollTo(0, 0);
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

    const totalPages = Math.ceil(filteredParticipants.length / PARTICIPANTS_PER_PAGE);
    const paginatedParticipants = filteredParticipants.slice(
        (currentPage - 1) * PARTICIPANTS_PER_PAGE,
        currentPage * PARTICIPANTS_PER_PAGE
    );

    return (
        <Container>
            <EventPicture>
                <EventButtonsDiv>
                    <Link href={`/event/${event.id}`} passHref>
                        <EventButton>
                            <LuArrowLeft className="icon" />
                        </EventButton>
                    </Link>
                </EventButtonsDiv>
            </EventPicture>
            <EventContent>
                <TitleAndDescriptionDiv>
                    <h1>{event.name}</h1>
                    <h4>{event.description}</h4>
                </TitleAndDescriptionDiv>
                {event.participants.length > 0 ? (
                    <ParticipantsContainer>
                        <ParticipantsHeader>
                            <h2>Participants</h2>
                            <p>{filteredParticipants.length} total</p>
                        </ParticipantsHeader>
                        <SearchWrapper>
                            <LuSearch className="searchIcon" />
                            <SearchInput
                                type="text"
                                placeholder="Search participants"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </SearchWrapper>
                        <ParticipantsList>
                            {paginatedParticipants.map((participant, index) => (
                                <Participant key={index}>{participant.name}</Participant>
                            ))}
                        </ParticipantsList>
                        {totalPages > 1 && (
                            <PaginationContainer>
                                <PaginationButton
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <LuChevronLeft />
                                </PaginationButton>
                                <span>{currentPage} of {totalPages}</span>
                                <PaginationButton
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <LuChevronRight />
                                </PaginationButton>
                            </PaginationContainer>
                        )}
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
                    </ParticipantsContainer>
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