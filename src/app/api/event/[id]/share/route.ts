import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const eventIndex = events.findIndex(e => e.id === id);

    if (eventIndex === -1) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    events[eventIndex].shareCount += 1;

    return NextResponse.json({ shareCount: events[eventIndex].shareCount });
}