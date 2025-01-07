'use client'

import { SessionProvider } from "next-auth/react";

interface AuthProvidersProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProvidersProps) => {
    return (
        <SessionProvider session={null}>
            {children}
        </SessionProvider>
    );
}