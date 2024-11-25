import styled from "styled-components";
import CardMiniatura from "../CardMiniatura";

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
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (min-width: ${size.laptop}) {
        grid-template-columns: 30% 30% 30%;
        gap: 2rem;
    }
    @media (min-width: ${size.laptopL}) {
        width: 80%;
    }
    @media (min-width: ${size.desktop}) {
        width: 60%;
    }
`

export const Card = styled(CardMiniatura)`
`