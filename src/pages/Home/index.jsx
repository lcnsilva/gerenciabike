import { useEffect, useState } from "react";
import { 
    Container,
    ContainerButton,
    SectionTitle,
    UpdateButton,
    Wrapper,
 } from './style.js'
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import GridCardMiniatura from "../../components/GridCardMiniatura/index.jsx";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/index.jsx";
// import MenuLateral from "../../components/Menu";


const Home = () => {
    // const [data, setData] = useState();
    // const [token, setToken] = useState();
    // const [idUser, setIdUser] = useState();
    const [bicicletas, setBicicletas] = useState([{}]);
    const navigate = useNavigate();


    // useEffect(() => {
    //     setToken(localStorage.getItem('token'));
    // }, []);

    // const handleChange = (e) => {
    //     setIdUser(e.target.value);
    //     console.log(idUser)
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const API_URL = `http://localhost:3000/usuario/${idUser}`;
    //     // const API_URL = 'http://localhost:3000/usuario/671ea0f3ac06bd80d036d47c'
    //     console.log(idUser);
    //     try{
    //         const response = await fetch(API_URL, {
    //             headers: {
    //                 'authorization': token
    //                 },
    //         });
    //         let responseJson = await response.json();
    //         console.log(responseJson);
    //         setData(responseJson);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    
    const fetchData = async () => {
        try{
            const response = await api.get(`/bicicletas`);
            const data = response.data
            setBicicletas(data);
        }catch(error){
            console.log(error);
        }
    }

    const handleClick = () => {
        fetchData();
    }

    useEffect(() => {
        const checkToken = () => {
            if (!localStorage.getItem('token')) {
                navigate('/');
            }
        };
        checkToken();
        fetchData();
    },[navigate])

    return(
        <Wrapper id="outer-container">
            <Header title='Página Inicial'/>
            <Container id="page-wrap">
                <SectionTitle style={{marginTop: '1.5rem'}}>
                    Quadro de Avisos
                </SectionTitle>
                <Banner/>
                <ContainerButton>
                    <UpdateButton onClick={handleClick}>Atualizar</UpdateButton>
                </ContainerButton>
                <SectionTitle>
                    Bicicletas
                </SectionTitle>
                <GridCardMiniatura bicicletas={bicicletas} />
            </Container>
            <Footer/>
        </Wrapper>
    )
}

export default Home;