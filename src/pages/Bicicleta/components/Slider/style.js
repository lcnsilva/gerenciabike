import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const size = {
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const Container = styled.div`

`

export const StyledSwiper = styled(Swiper)`
    width: 90%;
    height: 100%;
    padding: 1rem;
    @media (min-width: ${size.tablet}) {
        width: 55%;
        height: auto;
    }
    @media (min-width: ${size.laptop}) {
        width: 50%;
        height: auto;
    }
    @media (min-width: ${size.laptopM}) {
        width: 40%;
        height: auto;
    }
    @media (min-width: ${size.laptopL}) {
        width: 30%;
        height: auto;
    }
    @media (min-width: ${size.desktop}) {
        width: 20%;
    }
`

export const StyledSlide = styled(SwiperSlide)`
    margin-bottom: 1.5rem;
`
