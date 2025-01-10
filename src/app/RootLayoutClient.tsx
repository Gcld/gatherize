'use client'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StyledComponentsRegistry from "./registry";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import { SessionProvider } from "next-auth/react";

export default function RootLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <StyledComponentsRegistry>
                <SubscriptionProvider>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <main className="main">
                        {children}
                    </main>
                </SubscriptionProvider>
            </StyledComponentsRegistry>
        </SessionProvider>
    );
}