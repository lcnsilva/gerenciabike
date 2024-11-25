import Header from '../../components/Header/index.jsx';
import Banner from '../../components/Banner/index.jsx';
import GridCardMiniatura from '../../components/GridCardMiniatura/index.jsx';
import { 
    Wrapper, Container
}from './style.js'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api.js';
import Footer from '../../components/Footer/index.jsx';

const HomeCondomino = () => {

    const navigate = useNavigate();
    const [bicicletas, setBicicletas] = useState([{}]);

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

    useEffect(() => {
        const checkToken = () => {
            if (localStorage.getItem('token')) {
                navigate('/home');
            }
        };
        checkToken();
        fetchData();
    }, [navigate]);

    return(
        <Wrapper id="outer-container">
            <Header title='Página Inicial'/>
            <Container id="page-wrap">
                <Banner/>
                <GridCardMiniatura bicicletas={bicicletas}/>
            </Container>
            <Footer />
        </Wrapper>
    )
}

export default HomeCondomino;