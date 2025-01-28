import { NextRequest, NextResponse } from 'next/server';
import { getEvents, addEvent } from '@/data/events';
import { GatherizeEvent } from '@/types/event';

export async function GET() {
    return NextResponse.json(getEvents());
}

export async function POST(request: NextRequest) {
    const newEvent: Omit<GatherizeEvent, 'id' | 'participants'> = await request.json();
    
    const events = getEvents();
    const id = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    const createdEvent: GatherizeEvent = {
        ...newEvent,
        id,
        participants: [],
        shareCount: 0,
    };

    addEvent(createdEvent);
    console.log('Event added:', createdEvent);
    console.log('All events after adding:', getEvents());

    return NextResponse.json(createdEvent, { status: 201 });
}