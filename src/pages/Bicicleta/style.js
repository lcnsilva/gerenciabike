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
    display: flex;
    flex-direction: column;
`

export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ButtonContainer = styled.div`
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
    @media (min-width: ${size.tablet}) {
        width: 65%;
        height: auto;
    }
    @media (min-width: ${size.laptop}) {
        width: 55%;
        height: auto;
    }
    @media (min-width: ${size.laptopM}) {
        width: 45%;
        height: auto;
    }
    @media (min-width: ${size.laptopL}) {
        width: 30%;
        height: auto;
    }
    @media (min-width: ${size.desktop}) {
        width: 20%;
        height: auto;
    }
`

export const Button = styled.button`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: #1B262C;
    border-radius: 16px;
    padding: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 0px;
`


export const TitleButton = styled.h3`
    color: #FFFFFF;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;

`

export const IconButton = styled.img`
    width: 30px;
    height: 30px;
`

export const ContainerCard = styled.div`
    width: 100%;
    align-self: center;
    @media (min-width: ${size.tablet}) {
        width: 60%;
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