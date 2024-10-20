import Card from '../Card/Card';
import Menu from '../Menu';
import React, { useState,useEffect  } from 'react';
import Clock from '../Clock/Clock';
import './Tela.css';
import Perfil from './iconeperfil.png';
import Ciclista from './ciclista.png';
import { Swiper, SwiperSlide} from 'swiper/react'

const Tela = () => {
    const [imagem, setImagem] = useState(null);
    //visualização de slides dinamico
    const[slidePerview, setSlidePerview] = useState(4);

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

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 420) {
            setSlidePerview(5);
          } else {
            setSlidePerview(4);
          }
        }
      
        // Chama a função para ajustar no carregamento inicial
        handleResize();
      
        // Adiciona o event listener ao redimensionar a tela
        window.addEventListener("resize", handleResize);
      
        // Remove o event listener quando o componente desmontar
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      
    

    //Vetor das bicicletas
    const bikes = [
        {id: 1, imagebike: Ciclista, number: 1},
        {id: 2, imagebike: Ciclista, number: 2},
        {id: 3, imagebike: Ciclista, number: 3},
        {id: 4, imagebike: Ciclista, number: 4},
        {id: 5, imagebike: Ciclista, number: 5},
        {id: 6, imagebike: Ciclista, number: 6},
        {id: 7, imagebike: Ciclista, number: 7},
        {id: 8, imagebike: Ciclista, number: 8},
        {id: 9, imagebike: Ciclista, number: 9},
        {id: 10, imagebike: Ciclista, number: 10},
    ];

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
                        accept='image/*'   //Restringe a seleção de arquivos apenas a imagens
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

        <div className='container-slide'>

            <Swiper
                slidesPerView={slidePerview} //QUantidade de slides visiveis
                pagination={{ clickable: true }} //Slides clicaveis
                navigation
                spaceBetween={10} // Espaço entre os slides
            >
                {/* Mapeando os dados para derar as bikes dinamicamente */}
                {bikes.map((item)=>(
                    <SwiperSlide key={item.id}>
                    <div className="slide-content">
                        <div className='Bike-image'>
                            <img className="bike-icon" src={item.imagebike} alt={`Imagem de um Ciclista - Imagem ${item.number}`} />
                            </div>
                            <div className="bike-number">
                                {item.number}
                            </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

        </div>


            <Card />
        </div>
    );
};

export default Tela;
