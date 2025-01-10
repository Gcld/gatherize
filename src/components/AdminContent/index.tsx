'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";

import ContentAdmin from "@/components/ContentAdmin";
import Footer from "@/components/Footer";
import { Container } from "@/app/styled";

export default function AdminContent() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return null;
    }

    return (
        <Container>
            <Header />
            <ContentAdmin />
            <Footer />
        </Container>
    );
}