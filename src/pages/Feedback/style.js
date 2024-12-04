import styled from "styled-components";

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
    height: 100vh;
`

export const PageWrap = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
    @media (min-width: ${size.tablet}) {
        gap: 2rem;
        height: 60%;
    }
    @media (min-width: ${size.laptop}) {

    }
    @media (min-width: ${size.laptopM}) {
        height: 80%;

    }
    @media (min-width: ${size.laptopL}) {
        height: 70%;

    }
    @media (min-width: ${size.desktop}) {

    }
`
export const Title = styled.h2`
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 400;
`