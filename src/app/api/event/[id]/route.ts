import { NextRequest, NextResponse } from 'next/server';
import { events } from '@/data/events';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const event = events.find(e => e.id === id);

    if (!event) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json(event);
}