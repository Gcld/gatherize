'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import ContentAdmin from "@/components/ContentAdmin";
import Footer from "@/components/Footer";
import { Container } from "@/app/styled";
import HeaderAdmin from "../HeaderAdmin";

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
            <HeaderAdmin />
            <ContentAdmin />
            <Footer />
        </Container>
    );
}