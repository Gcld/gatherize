import { eventsUser1, eventsUser2 } from "@/utils/eventsData";
import { NextAuthOptions, Session, User } from "next-auth";
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
            console.log("JWT CALLBACK: ", user);
            console.log("JWT CALLBACK TOKEN: ", token);
            const customUser = user as User;
            if (user){
                return { ...token, user: customUser, events: customUser.events };
            }
            return token;
        },
        session: async ({ session, token }) => {
            
            console.log("SESSION CALLBACK: ", session);
            const customSession: Session = {
                expires: session?.expires,
                user: {
                    id: '1',
                    name: token.name || '',
                    email: token.email || '',
                    password: '123',
                    role: 'admin',
                },
            }
            return customSession;
        }
    },

    pages: {
        signIn: '/login',
        newUser: '/signup',
    }
}