import { api } from "@/service/service";
import { GatherizeEvent } from "@/types/event";

export async function fetchEvents() {
    console.log('Fetching events...');
    const response = await api.get('/event');
    if (response.status !== 200) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
    }
    const data = response.data;
    console.log('Fetched events:', data);
    return data;
}

export async function fetchEventById(id: number) {
    try {
        console.log(`Fetching event with id: ${id}`);
        const response = await api.get(`/event/${id}`);
        console.log(`Response status: ${response.status}`);
        console.log('Fetched event:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching event:', error);
        throw error;
    }
}

export async function deleteEvent(id: number) {
    try {
        console.log(`Deleting event with id: ${id}`);
        const response = await api.delete(`/event/${id}`);
        console.log(`Response status: ${response.status}`);
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
        const response = await api.patch(`/event/${id}`, updatedEventData);
        console.log(`Response status: ${response.status}`);
        console.log('Updated event:', response.data);
        return response.data as GatherizeEvent;
    } catch (error) {
        console.error('Error updating event:', error);
        throw error;
    }
}

export async function createEvent(eventData: Omit<GatherizeEvent, 'id' | 'participants' | 'shareCount'>) {
    try {
        console.log('Creating new event...');
        const response = await api.post('/event', eventData);
        console.log(`Response status: ${response.status}`);
        console.log('Created event:', response.data);
        return response.data as GatherizeEvent;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
}

export async function updateEventSubscription(id: number, action: 'subscribe' | 'unsubscribe') {
    try {
        console.log(`Updating subscription for event with id: ${id}`);
        const response = await api.post(`/event/${id}/subscribe`, { action });
        console.log(`Response status: ${response.status}`);
        console.log('Updated event:', response.data);
        return response.data as GatherizeEvent;
    } catch (error) {
        console.error('Error updating subscription:', error);
        throw error;
    }
}