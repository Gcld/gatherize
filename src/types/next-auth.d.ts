import 'next-auth';

declare module 'next-auth' {
    interface User {
        name: string | undefined;
        email: string | undefined;
        password: string | undefined;
        role: string | undefined;
        events?: Event[];
    }

    interface Session {
        user: User;
        events?: Event[];
    }

    export interface Event{
        id: number | undefined;
        name: string | undefined;
        description: string | undefined;
        date: Date | undefined;
        cep: string | undefined;
        address: string | undefined;
        city: string | undefined;
        state: string | undefined;
        participants: number | undefined;
        maxPeople: number | undefined;
    }
}