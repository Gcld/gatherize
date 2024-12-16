import { LuFan } from "react-icons/lu";
import { Container, LogoDiv } from "./styled";
import Link from "next/link";

export default function Logo() {
    return (
        <Container>
            <Link href="/" passHref>
                <LogoDiv>
                    <LuFan size={24} color="var(--primaryDarkZaori)"/>
                    <h2>Gatherize</h2>
                </LogoDiv>
            </Link>
        </Container>
    );
}