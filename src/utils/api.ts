import { GatherizeEvent } from "@/types/event";


export async function fetchEvents() {
    try {
        console.log('Fetching events...');
        const response = await fetch('/api/event');
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Failed to fetch events: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched events:', data);
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

export async function fetchEventById(id: number) {
    try {
        console.log(`Fetching event with id: ${id}`);
        const response = await fetch(`/api/event/${id}`);
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Failed to fetch event: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched event:', data);
        return data;
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error;
    }
}

export async function deleteEvent(id: number) {
    try {
        console.log(`Deleting event with id: ${id}`);
        const response = await fetch(`/api/event/${id}`, {
            method: 'DELETE',
        });
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Failed to delete event: ${response.statusText}`);
        }
        console.log('Event deleted successfully');
        return true;
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
}

export async function updateEvent(id: number, updatedEventData: Partial<Omit<GatherizeEvent, 'id' | 'participants' | 'creatorId'>>) {
    try {
        console.log(`Updating event with id: ${id}`);
        const response = await fetch(`/api/event/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEventData),
        });
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Failed to update event: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Updated event:', data);
        return data as GatherizeEvent;
    } catch (error) {
        console.error('Error updating event:', error);
        throw error;
    }
}

export async function createEvent(eventData: Omit<GatherizeEvent, 'id' | 'participants'>) {
    try {
        console.log('Creating new event...');
        const response = await fetch('/api/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error response: ${errorText}`);
            throw new Error(`Failed to create event: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Created event:', data);
        return data as GatherizeEvent;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
}