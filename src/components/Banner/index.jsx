import 'swiper/css';
import img2 from '../../assets/banner_img/comunicado1.jpg'
import img1 from '../../assets/banner_img/comunicado2.jpg'
import img3 from '../../assets/banner_img/comunicado3.jpg'
import img4 from '../../assets/banner_img/comunicado4.jpg'
import { 
    Wrapper, SwiperContainer, Slide, SlideImage
} from './Banner.js'


import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

const Banner = () => {
        const [slides, setSlides] = useState([img1, img2, img3, img4])
    return (
        <Wrapper>
            <SwiperContainer
                modules={[ Pagination]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {slides.map((slide) => (
                    <Slide key={Math.random()}>
                        <SlideImage src={slide}/>
                    </Slide>
                ))}                
            </SwiperContainer>
        </Wrapper>
    )
}

export default Banner;