import Card from '../Card/Card';
import Menu from '../Menu';
import React, { useState } from 'react';
import Clock from '../Clock/Clock';
import './Tela.css';
import Perfil from './iconeperfil.png';

const Tela = () => {
    const [imagem, setImagem] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
        if (file) {
            const reader = new FileReader(); // Cria um FileReader
            reader.onloadend = () => {
                setImagem(reader.result); // Atualiza o estado com a imagem
            };
            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
    };

    return (
        <div className='mobile-screen'>
            <div className='cell-panel'>
                <Clock />
            </div>

            <div className='painel-menu'>
                <Menu />
                <h1 className='title-tela'>Bicicletas</h1>
                
                <div className='perfil'>
                    <input 
                        type='file' 
                        id='filImage' 
                        name='filmage' 
                        accept='image/*'  
                        onChange={handleImageChange} 
                        style={{ display: 'none' }} // Oculte o input
                    />
                    <img 
                        src={imagem || Perfil} 
                        alt="Selecione uma imagem" 
                        id="imgPhoto" 
                        onClick={() => document.getElementById('filImage').click()} // Adicione o evento de clique
                    />
                    <div className='circle'></div>
                </div>
            </div>

            <Card />
        </div>
    );
};

export default Tela;
