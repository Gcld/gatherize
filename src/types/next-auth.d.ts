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
    }
}