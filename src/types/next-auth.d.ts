import 'next-auth';

declare module 'next-auth' {
    interface User {
        name: string | undefined;
        email: string | undefined;
        password: string | undefined;
        role: string | undefined;
    }

    interface Session {
        user: User;
        events?: Event[];
    }

    interface Event{
        id: number | undefined;
        name: string | undefined;
        description: string | undefined;
        date: Date | undefined;
        time: string | undefined;
        cep: string | undefined;
        address: string | undefined;
        city: string | undefined;
        state: string | undefined;
        maxPeople: number | undefined;
    }
}