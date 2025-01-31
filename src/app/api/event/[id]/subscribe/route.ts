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

const { action, userId, userName } = await request.json();

if (action === 'subscribe') {
    if (events[eventIndex].participants.length < events[eventIndex].maxPeople) {
        events[eventIndex].participants.push({ id: userId, name: userName });
    } else {
        return NextResponse.json({ error: 'Event is full' }, { status: 400 });
    }
} else if (action === 'unsubscribe') {
    const participantIndex = events[eventIndex].participants.findIndex(p => p.id === userId);
    if (participantIndex !== -1) {
        events[eventIndex].participants.splice(participantIndex, 1);
    } else {
        return NextResponse.json({ error: 'Participant not found' }, { status: 400 });
    }
} else {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

return NextResponse.json(events[eventIndex]);
}