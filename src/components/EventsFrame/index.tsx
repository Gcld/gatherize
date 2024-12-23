import { MdArrowDropDown } from "react-icons/md";
import { Container } from "./styled";

export default function EventsFrame() {
    return (
        <Container>
            <div className="availableEvents">
                <h2>Available Events</h2>
                <h5>24</h5>
            </div>
            <div className="sortButton">
                <h3>Sort by</h3>
                <MdArrowDropDown className="icon"/>
            </div>
        </Container>
    );
}