export function GET() {

    const data = [
        {
            id: 1,
            name: 'Event 1',
            description: 'Description 1',
            date: '2023-12-31',
            cep: '59153903',
            address: 'Alameda dos Bosques',
            city: 'Parnamirim',
            state: 'RN',
            maxPeople: 100,
            participants: 50,
        },

        {
            id: 2,
            name: 'Event 2',
            description: 'Description 2',
            date: '2023-12-31',
            cep: '59152195',
            address: 'Rua Ipê Caboclo',
            city: 'Parnamirim',
            state: 'RN',
            maxPeople: 70,
            participants: 20,
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