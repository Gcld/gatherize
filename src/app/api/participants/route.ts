export function GET() {

    const data = [
        {
            id: 1,
            name: 'Participant 1',
        },

        {
            id: 2,
            name: 'Participant 2',
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