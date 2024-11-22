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
// import MenuLateral from "../../components/Menu";


const Home = () => {
    // const [data, setData] = useState();
    // const [token, setToken] = useState();
    // const [idUser, setIdUser] = useState();
    const [bicicletas, setBicicletas] = useState([{}]);


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
            console.log(data);
            setBicicletas(data);
        }catch(error){
            console.log(error);
        }
    }

    const handleClick = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <Wrapper id="outer-container">
            <Header title='Página Inicial'/>
            <Container id="page-wrap">
                <Banner/>
                <ContainerButton>
                    <UpdateButton onClick={handleClick}>Atualizar</UpdateButton>
                </ContainerButton>
                <SectionTitle>
                    Bicicletas
                </SectionTitle>
                <GridCardMiniatura bicicletas={bicicletas}/>
            </Container>
        </Wrapper>
    )
}

export default Home;