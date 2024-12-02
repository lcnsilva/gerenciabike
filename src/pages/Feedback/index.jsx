import Header from "../../components/Header/index.jsx";
import Card from "./Components/Card/index.jsx";
import { Container } from "./style.js"
import Footer from '../../components/Footer/index.jsx';


const Feedback = () => {

    return (
        <Container id="outer-container">
            <Header title={"Feedback"}/>
            <div id='page-wrap'>
                <Card />
            </div>
            <Footer/>
        </Container>
    )
}

export default Feedback;