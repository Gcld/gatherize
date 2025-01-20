'use client'

import Header from "@/components/Header";
import { Container } from "./styled";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Container>
        <Header showSearchAndFilter={true} />
        <Content />
        <Footer />
      </Container>
    </SessionProvider>
  );
}