import { Link } from "react-router-dom";
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
    gap: 1rem;
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 8px 10px 0px;
`

export const ContainerImg = styled.div`
    background-color: #1B262C;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 25px;
`

export const Title = styled.h2`
    text-align: center;
    width: 100%;
    padding: 0.5rem;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 400;
`
export const TitleImg = styled.h2`
    color: #ffffff;
    text-align: center;
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
`

export const ContainerImgBike = styled.div`
    width: 100%;
    border-radius: 20px;
`

export const ImgBike = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

export const ContainerInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
`

export const Button = styled.button`
    background-color: ${props => props.$isAvailable ? 'green' : 'red'};
    width: 35px;
    height: 35px;
    border: 2px solid #1B262C;
    border-radius: 8px;
    @media (min-width: ${size.laptopM}) {
        width: 40px;
        height: 40px;
    }
    @media (min-width: ${size.desktop}) {
        width: 45px;
        height: 45px;
    }
` 

export const ButtonMaintenance = styled.button`
    background-color: ${props => props.$isMaintenance ? 'orange' : 'white'};
    width: 35px;
    height: 35px;
    border: 2px solid #1B262C;
    border-radius: 8px;
    @media (min-width: ${size.laptopM}) {
        width: 40px;
        height: 40px;
    }
    @media (min-width: ${size.desktop}) {
        width: 45px;
        height: 45px;
    }
`

export const ButtonIcon = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 20px;
` 

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #Ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    gap: 0.5rem;
`

export const ViewButton = styled.button`
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 18px;
    background-color: #1B262C;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-decoration: none;
    &:hover{
        background-color: rgba(0,0,0, 0.6);
    }
`

export const ViewIcon = styled.img`
`