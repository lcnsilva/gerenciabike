import Header from "../../components/Header/index.jsx";
import Card from "./Components/Card/index.jsx";
import { Container } from "./style.js"

const Feedback = () => {

    return (
        <Container id="outer-container">
            <Header title={"Feedback"}/>
            <div id='page-wrap'>
                <Card />
            </div>
        </Container>
    )
}

export default Feedback;