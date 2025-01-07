import 'next-auth';

declare module 'next-auth' {
    interface User {
        email: string | undefined;
        password: string | undefined;
    }
}