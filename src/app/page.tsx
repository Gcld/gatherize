'use client'

import Header from "@/components/Header";
import { Container } from "./styled";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Content/>
      <Footer/>
    </Container>
  );
}
