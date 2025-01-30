import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const auth: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = users.find(user => user.email === credentials.email);

                if (user && user.password === credentials.password) {
                    const userInfo = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        dateOfBirth: user.dateOfBirth || new Date().toISOString().split('T')[0], 
                    };

                    if (!userInfo.dateOfBirth || !Date.parse(userInfo.dateOfBirth)) {
                        console.warn(`Data de nascimento inválida para o usuário ${userInfo.email}`);
                    }

                    return userInfo;
                }

                return null;
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token = {
                    ...token,
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    dateOfBirth: user.dateOfBirth,
                };
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token && session.user) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    email: token.email as string,
                    name: token.name as string,
                    role: token.role as string,
                    dateOfBirth: token.dateOfBirth as string,
                };
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
        maxAge: 30 * 24 * 60 * 60, 
    },
    secret: process.env.NEXTAUTH_SECRET,
};