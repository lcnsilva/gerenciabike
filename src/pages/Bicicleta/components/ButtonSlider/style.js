import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

`

export const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-decoration: none;
    cursor: pointer;
`

export const ButtonNumber = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 600;
    background-color: ${props => props.$selected ? '#FFFFFF':"#1B262C"};
    width: 80%;
    color: ${props => props.$selected ? '#1B262C':"#FFFFFF"};
    border: ${props => props.$selected ? '2px solid #1B262C':""};    ;
    border-radius: 8px;
    text-align: center;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 0px;
`

export const ButtonIcon = styled.img`
    background-color: ${props => props.$selected ? '#FFFFFF':"#1B262C"};
    border: ${props => props.$selected ? '2px solid #1B262C':""};
    width: 80%;
    border-radius: 8px;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 10px 0px;
`