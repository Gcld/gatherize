import 'next-auth';

declare module 'next-auth' {
    interface User {
        id: string;
        name: string;
        email: string;
        password?: string;
        role: string;
        events?: GatherizeEvent[];
    }

    interface Session {
        user: User;
    }

    interface GatherizeEvent {
        id?: number;
        name?: string;
        description?: string;
        date?: Date;
        cep?: string;
        address?: string;
        city?: string;
        state?: string;
        participants?: number;
        maxPeople?: number;
    }
}