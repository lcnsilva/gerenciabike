import React from 'react';
import './Card.css';
import disponivel from '../../assets/icons_card/disponivel.svg'
import indisponivel from '../../assets/icons_card/indisponivel.svg'
import manutencao from '../../assets/icons_card/manutencao.svg'
import clock from '../../assets/icons_card/white-clock.svg'

const Card = () => {
    return (
        <div className='Card'>
            <form action="">
                <div className='input-box'>
                    <p className='title-input'>ID:</p>
                    <input type="text" placeholder='' required />
                </div>
                <div className='input-box'>
                    <p className='title-input'>Modelo:</p>
                    <input type="text" placeholder='' required />
                </div>
                <p className='title-input'>Disponibilidade:</p>
                <div className='wrapper'>
                    <div className='icons-wrapper'>

                    <div className='icon-wrapper1'><img src={disponivel} alt=''/></div>
                    
                    <div className='icon-wrapper2'><img src={manutencao} alt=''/></div>
                    
                    <div className='icon-wrapper3'><img src={indisponivel} alt=''/></div>
                    </div>
                </div>
                <p className='title-input'>Tempo para a liberação:</p>
                <div className='wrapper2'>
                    <img src={clock} className='icon-white-clock' alt=''/>
                </div>
            </form>
        </div>
    );
};

export default Card