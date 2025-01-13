'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminContent from '@/components/AdminContent';

export default function AdminPage() {
    const { status } = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        } else if (status === "authenticated") {
            setIsLoading(false);
        }
    }, [status, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <AdminContent />;
}