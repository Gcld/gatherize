import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';

export async function GET(request: NextRequest) {
    const id = parseInt(request.nextUrl.pathname.split('/').pop() || '');
    const event = events.find(e => e.id === id);

    if (!event) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
}

export async function DELETE(request: NextRequest) {
    const id = parseInt(request.nextUrl.pathname.split('/').pop() || '');
    const eventIndex = events.findIndex(e => e.id === id);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    events.splice(eventIndex, 1);
    return NextResponse.json({ message: 'Event deleted successfully' });
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const eventIndex = events.findIndex(e => e.id === id);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const updatedEventData = await request.json();
    events[eventIndex] = { ...events[eventIndex], ...updatedEventData };

    return NextResponse.json(events[eventIndex]);
}