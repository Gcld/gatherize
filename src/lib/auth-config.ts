import { eventsUser1, eventsUser2 } from "@/utils/eventsData";
import { GatherizeEvent, NextAuthOptions, User } from "next-auth";
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
                    name: 'Gabriel Lima',
                    email: 'user@email.com',
                    password: '123',
                    role: 'admin',
                    events: eventsUser1,
                }
                const user2: User = {
                    id: '2',
                    name: 'Monkey D. Luffy',
                    email: 'kingmeat123@email.com',
                    password: '123',
                    role: 'user',
                    events: eventsUser2,
                }
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user;
                }
                if (credentials?.email === user2.email && credentials?.password === user2.password) {
                    return user2;
                }
                return null;
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
                token.events = user.events;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.role = token.role as string;
                session.user.events = token.events as GatherizeEvent[]; 
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
        newUser: '/signup',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}