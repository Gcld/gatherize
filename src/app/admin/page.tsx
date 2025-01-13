'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export default function AdminPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (!isClient) {
        return null;
    }

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return null;
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome, {session.user.name}</p>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
        </div>
    );
}