import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const size = {
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
}


export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    @media (min-width: ${size.tablet}) {
        width: 60%;
        height: auto;
    }
    @media (min-width: ${size.laptop}) {
        width: 50%;
    }
    @media (min-width: ${size.laptopM}) {
        width: 40%;
    }
    @media (min-width: ${size.laptopL}) {
        width: 35%;
    }
    @media (min-width: ${size.desktop}) {
        width: 30%;
    }
`
export const SwiperContainer = styled(Swiper)`
    width: 90%;
    height: 70%;
    padding: 1rem;
`
export const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    border: 2px solid black;
    border-radius: 20px;
    margin-bottom: 1.5rem;
`

export const SlideImage = styled.img`
    border-radius: 18px;
    width: 100%;
    height: auto;
    object-fit: cover;
`