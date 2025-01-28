import { NextRequest, NextResponse } from 'next/server';
import { getEvents, updateEvent, deleteEventById } from '@/data/events';

export async function GET(request: NextRequest) {
    const id = parseInt(request.nextUrl.pathname.split('/').pop() || '');
    const event = getEvents().find(e => e.id === id);

    if (!event) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
}

export async function DELETE(request: NextRequest) {
    const id = parseInt(request.nextUrl.pathname.split('/').pop() || '');
    const eventIndex = getEvents().findIndex(e => e.id === id);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    deleteEventById(id);
    return NextResponse.json({ message: 'Event deleted successfully' });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const events = getEvents();
    const eventIndex = events.findIndex(e => e.id === id);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const updatedEventData = await request.json();
    const updatedEvent = { ...events[eventIndex], ...updatedEventData };
    updateEvent(updatedEvent);

    return NextResponse.json(updatedEvent);
}