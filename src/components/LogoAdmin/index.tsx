import Link from "next/link";
import { Container, LogoDiv } from "../Logo/styled";
import { LuFan } from "react-icons/lu";

export default function LogoAdmin() {
    return (
        <Container>
            <Link href="/admin" passHref>
                <LogoDiv>
                    <LuFan className="logoIcon"/>
                    <h1>Gatherize</h1>
                </LogoDiv>
            </Link>
        </Container>
    );
}

