'use client'

import Header from "@/components/Header";
import { Container } from "./styled";
import Content from "@/components/Content";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Content/>
    </Container>
  );
}
