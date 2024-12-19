import { LuFan } from "react-icons/lu";
import { Container, LogoDiv } from "./styled";
import Link from "next/link";

export default function Logo() {
    return (
        <Container>
            <Link href="/" passHref>
                <LogoDiv>
                    <LuFan className="logoIcon"/>
                    <h1>Gatherize</h1>
                </LogoDiv>
            </Link>
        </Container>
    );
}