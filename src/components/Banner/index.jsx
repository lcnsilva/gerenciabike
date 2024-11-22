import 'swiper/css';
import img1 from '../../assets/banner_img_test/aviso.jpg'
import img2 from '../../assets/banner_img_test/aviso2.png'
import img3 from '../../assets/banner_img_test/aviso.jpg'
import img4 from '../../assets/banner_img_test/aviso2.png'
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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