import { NextAuthOptions, User } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const auth: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user: User = {
                    id: '1',
                    email: 'user@email.com',
                    password: '123',
                }
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user;
                }
                return null;
            }
        })
    ],
}