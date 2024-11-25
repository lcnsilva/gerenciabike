import styled from "styled-components";

const size = {
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


export const WrapperHeader = styled.header`
    background-color: #1B262C;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
`

export const SideBarContainer = styled.div`
    width: 20%;
    align-self: stretch;
    display: flex;
    @media (min-width: ${size.tablet}) {
        width: 10%;
    }
    @media (min-width: ${size.laptopL}) {
        width: 5%;
    }
    @media (min-width: ${size.desktop}) {
        width: 0%;
    }
`

export const Title = styled.h1`
    color: #FFFFFF;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    padding: 0.5rem 0;
    text-align: center;
    width: 80%;
    @media (min-width: ${size.tablet}) {
        width: 100%;
    }
`

export const Icon = styled.img`
    width: 10%;
    padding: 0 1rem;
    width: 30px;
    max-height: 30px;
`

export const ContainerIcon = styled.div`
    cursor: pointer; 
    &:hover {
        background-color: rgba(255,255,255,0.2);
    }
    &:active{
        background-color: rgba(255,255,255,0.4);
    }
`

