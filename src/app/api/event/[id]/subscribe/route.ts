import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';

export async function POST(request: NextRequest) {
    const id = request.nextUrl.pathname.split('/').slice(-2)[0];
    const numericId = id ? parseInt(id) : null;

    if (numericId === null || isNaN(numericId)) {
        return NextResponse.json({ error: 'Invalid event ID' }, { status: 400 });
    }

    const eventIndex = events.findIndex(e => e.id === numericId);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const { action } = await request.json();

    if (action === 'subscribe') {
        events[eventIndex].participants += 1;
    } else if (action === 'unsubscribe') {
        events[eventIndex].participants = Math.max(0, events[eventIndex].participants - 1);
    } else {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(events[eventIndex]);
}