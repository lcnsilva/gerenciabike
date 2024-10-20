import React, {useState, useEffect} from 'react';
import './Clock.css';
import Capacity from './Capacity.svg'
import Connection from './Cellular-Connection.svg'
import Wifi from './Wifi.svg'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(() => { //define um intervalo que executa uma função a cada segundo
            setTime(new Date()); //Essa função atualiza o estado time com a hora atual.
        },1000);

        return () => clearInterval(timer);// Limpa o intervalo quando o componente é desmontado
    },[]);
    const HoraFormatada = time.toLocaleTimeString([],{hour: '2-digit',minute:'2-digit'})

    
    

    return (
        <div className="clock">
            <h2 className='hour'>{HoraFormatada}</h2> {/* Exibe a hora atual */}
            <div className='icons-container'>
            <img className='icons-container-connection' src={Connection} alt="Conexão" />
            <img className='icons-container-wifi'src={Wifi} alt="Wi-FI" />
            <img className='icons-container-capacity'src={Capacity} alt="Capacidade" />
            </div>
        </div>
    );
    // Usa useState para armazenar a hora atual.
    // Usa useEffect para criar um temporizador (setInterval) 
    //que atualiza a hora a cada segundo.
    // Exibe a hora formatada como uma string 
    //(toLocaleTimeString()).
}

export default Clock;