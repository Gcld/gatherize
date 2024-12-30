'use client'

import Header from "@/components/Header";
import { Container } from "../styled";
import ContentAdmin from "@/components/ContentAdmin";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <Container>
            <Header />
            <ContentAdmin />
            <Footer />
        </Container>
    );
}
