import {
    Card, Container
} from './GridCardMiniatura.js'
import { useEffect, useState } from 'react';
import api from '../../services/api.js';

const GridCardMiniatura = () => {

    const [bicicletas, setBicicletas] = useState([{}]);

    const fetchData = async () => {
        try{
            const response = await api.get(`/bicicletas`);
            const data = response.data
            setBicicletas(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <Container>
            {bicicletas.map((bicicleta, index) =>  
                <Card bicicleta={bicicleta} key={bicicleta._id || index} index={index}/>
            )}
        </Container>
    )
}

export default GridCardMiniatura;