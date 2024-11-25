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

export const Wrapper = styled.div`
    --cor-de-fundo-page: #F5F5F5;
    background-color: var(--cor-de-fundo-page);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

export const SectionTitle = styled.h2`
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-weight: 400;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 1.5rem;
    @media (min-width: ${size.tablet}) {
        width: 90%;
        height: auto;
    }
    @media (min-width: ${size.laptopM}) {
        width: 75%;
        height: auto;
    }
    @media (min-width: ${size.laptopL}) {
        width: 60%;
        height: auto;
    }
    @media (min-width: ${size.desktop}) {
        width: 45%;
    }
`

export const UpdateButton = styled.button`
    align-items: flex-end;
    width: 30%;
    background-color: #1B262C;
    color: #FFFFFF;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    padding: 0.5rem 0;
    border-radius: 8px;
    @media (min-width: ${size.tablet}) {
        width: 20%;
        height: auto;
    }
    @media (min-width: ${size.laptopM}) {
        width: 15%;
        height: auto;
    }
`