import { 
    Container, StyledSlide, StyledSwiper
} from './style.js'
import ButtonSlider from '../ButtonSlider/index.jsx';
import { useEffect } from 'react';
import api from '../../../../services/api.js';
import { useState } from 'react';
import { Pagination  } from 'swiper/modules';
import 'swiper/css';


const Slider = ({bicicletaIndex}) => {

    const [bicicletas, setBicicletas] = useState([{}]);

    const fetchData = async () => {
        try{
            const response = await api.get(`/bicicletas`);
            const data = response.data;
            setBicicletas(data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    },[])

    const handleSelected = (index) => {
        if(bicicletaIndex === index){
            return true;
        }
        return false;
    }

    return (
        <Container id='outer-container'>
            <div id='page-wrap'>
                <StyledSwiper
                    modules={[Pagination]}
                    spaceBetween={25}
                    slidesPerView={5}
                    pagination={{ clickable: true }}

                >
                    {bicicletas.map((bicicleta, index) => 
                        <StyledSlide key={bicicleta._id || index}>
                            <ButtonSlider index={index} id={bicicleta._id} selected={handleSelected(index)}/>
                        </StyledSlide>
                    )}
                    {/* <StyledSlide >
                            <ButtonSlider selected={true} index={2}/>
                    </StyledSlide>
                    <StyledSlide >
                            <ButtonSlider selected={false} index={3}/>
                    </StyledSlide>
                    <StyledSlide >
                        <ButtonSlider selected={false} index={4}/>
                    </StyledSlide>
                    <StyledSlide >
                        <ButtonSlider selected={false} index={5}/>
                    </StyledSlide>
                    <StyledSlide >
                        <ButtonSlider selected={false} index={6}/>
                    </StyledSlide> */}
                    
                </StyledSwiper>
            </div>

        </Container>
    )
}

export default Slider;