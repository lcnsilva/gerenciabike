import Header from '../../components/Header/index.jsx';
import Banner from '../../components/Banner/index.jsx';
import GridCardMiniatura from '../../components/GridCardMiniatura/index.jsx';
import { 
    Wrapper
}from './style.js'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomeCondomino = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        const checkToken = () => {
            if (localStorage.getItem('token')) {
                navigate('/home');
            }
        };
        checkToken();
    }, [navigate]);

    return(
        <Wrapper>
            <Header title='Página Inicial'/>
            <Banner/>
            <GridCardMiniatura/>
        </Wrapper>
    )
}

export default HomeCondomino;