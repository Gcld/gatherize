export function GET() {

    const data = [
        {
            id: 1,
            name: 'Event 1',
            description: 'Description 1',
            date: '2023-12-31',
            cep: '12345-678',
            address: 'Address 1',
            city: 'City 1',
            state: 'State 1',
            maxPeople: 100,
            participants: 50,
        },

        {
            id: 2,
            name: 'Event 2',
            description: 'Description 2',
            date: '2023-12-31',
            cep: '12345-678',
            address: 'Address 2',
            city: 'City 2',
            state: 'State 2',
            maxPeople: 100,
            participants: 50,
        }]

    return new Response(
        JSON.stringify(data),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}