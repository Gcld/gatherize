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