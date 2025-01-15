export async function fetchEvents() {
    try {
        const response = await fetch('/api/event');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        console.log('Fetched events:', data); 
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}