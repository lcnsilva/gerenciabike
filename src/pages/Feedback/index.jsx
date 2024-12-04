import Header from "../../components/Header/index.jsx";
import Card from "./Components/Card/index.jsx";
import { Container, PageWrap, Title } from "./style.js"
import Footer from '../../components/Footer/index.jsx';


const Feedback = () => {

    return (
        <Container id="outer-container">
            <Header title={"Feedback"}/>
            <PageWrap id='page-wrap'>
                <Title >
                    Preencha o Formulário:
                </Title>
                <Card />
            </PageWrap>
            <Footer/>
        </Container>
    )
}

export default Feedback;