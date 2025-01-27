import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';
import { GatherizeEvent } from '@/types/event';

export async function GET() {
    return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
    const newEvent: Omit<GatherizeEvent, 'id' | 'participants'> = await request.json();
    
    const id = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
    const createdEvent: GatherizeEvent = {
        ...newEvent,
        id,
        participants: [],
    };

    events.push(createdEvent);

    return NextResponse.json(createdEvent, { status: 201 });
}