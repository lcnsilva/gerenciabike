import Card  from '../Card/Card'
import Menu from '../Menu'
import React from 'react';
import Clock from '../Clock/Clock';
import './Tela.css'

const Tela=()=>{

        
    return(
        <div className='mobile-screen'>
            <div className='cell-panel'>
                <Clock />
            </div>
            <div className='painel-menu'>
            <Menu />
            <h1 className='title-tela'>Bicicletas</h1>
            <div className='perfil'>
                <img src="" alt="" />
                <div className='circle'></div>
            </div>
            </div>
            
            <Card />
        </div>
    );
};

export default Tela;