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
                }
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user;
                }
                return null;
            }
        })
    ],
    callbacks: {
        session: async ({ session }) => {
            
            const customSession: Session = {
                expires: session?.expires,
                user: {
                    id: session?.user.id,
                    name: session?.user.name,
                    email: session?.user.email,
                    password: session?.user.password,
                    role: session?.user.role,
                }
            }
            return customSession;
        }
    },

    pages: {
        signIn: '/login',
        newUser: '/signup',
    }
}