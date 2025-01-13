'use client'

import { useSession } from "next-auth/react";
import ContentAdmin from "@/components/ContentAdmin";
import Footer from "@/components/Footer";
import { Container } from "@/app/styled";
import HeaderAdmin from "../HeaderAdmin";

export default function AdminContent() {
    const { data: session } = useSession();

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