import { useEffect, useState } from "react";
import * as S from './style.js'
// import MenuLateral from "../../components/Menu";


const Home = () => {
    const [data, setData] = useState();
    const [token, setToken] = useState();
    const [idUser, setIdUser] = useState();

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const handleChange = (e) => {
        setIdUser(e.target.value);
        console.log(idUser)
    };

    const handleSubmit = async (e) => {
        if(!token) {
            window.location.reload;
        }
        e.preventDefault();
        const API_URL = `http://localhost:3000/usuario/${idUser}`;
        // const API_URL = 'http://localhost:3000/usuario/671ea0f3ac06bd80d036d47c'
        console.log(idUser);
        try{
            const response = await fetch(API_URL, {
                headers: {
                    'authorization': token
                    },
            });
            let responseJson = await response.json();
            console.log(responseJson);
            setData(responseJson);
        }catch(error){
            console.log(error);
        }
    }
    if(!token) {
        return(
            <div>
                <h1>você não está logado</h1>
            </div>
        )
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button type='submit'>Enviar</button>                
                <h2>id exemplo: 671ea0f3ac06bd80d036d47c</h2>
            </form>
            {data && (
                <div>
                    <h1>Dados do Usuário:</h1>
                    <pre>{JSON.stringify(data)}</pre>
                </div>
            )}
        </div>    
        )
}

export default Home;