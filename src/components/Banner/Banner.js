import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.div`


`
export const SwiperContainer = styled(Swiper)`
    width: 340px;
    height: 210px;
    padding: 1rem;
`
export const Slide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 2px solid black;
    border-radius: 20px;
`

export const SlideImage = styled.img`
    border-radius: 18px;
    width: 100%;
    height: 100%;
`