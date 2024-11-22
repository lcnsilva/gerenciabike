import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    gap: 1rem;
    padding: 1rem;
;`

export const ContainerImgBike = styled.div`
    border: 2px solid black;
    width: 100%;
    border-radius: 20px;
`

export const ImgBike = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

export const Title = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
`

export const IdBike = styled.div`
    color: #1B262C;
    padding: 0.5rem;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 600;
`

export const Button = styled.button`
    background-color: ${props => props.$isAvailable ? 'green' : 'red'};
    width: 35px;
    height: 35px;
    border: 2px solid #1B262C;
    border-radius: 8px;
` 

export const ButtonMaintenance = styled.button`
    background-color: ${props => props.$isMaintenance ? 'orange' : 'white'};
    width: 35px;
    height: 35px;
    border: 2px solid #1B262C;
    border-radius: 8px;
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
    padding: 0.5rem;
    border-radius: 8px;
    text-decoration: none;
    &:hover{
        background-color: rgba(0,0,0, 0.6);
    }
`

export const ViewIcon = styled.img`
`