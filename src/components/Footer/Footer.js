import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #1B262C;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    padding: 2rem 0;
    @media screen and (min-width: 1280px){
        padding: 0;
        gap: 0;
        flex-direction: row;
    }
`

export const Address = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 2rem 0 0 0 ;
    margin-left: 1rem;
    @media screen and (min-width: 768px){
        width: 50%;
        justify-content: center;
    }
    @media screen and (min-width: 1280px){
        padding: 0;
        gap: 0;
        border: none;
        width: auto;
    }
`

export const Email = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
    @media screen and (min-width: 768px){
        width: 50%;
        justify-content: center;
    }
    @media screen and (min-width: 1280px){  
        width: auto;
    }
`

export const IconText = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    user-select: none;

`

export const Icon = styled.img`
    user-select: none;
    height: auto;
    width: 150px;
    border-bottom: 2px solid white;
    @media screen and (min-width: 1280px){
        height: 200px;
        width: 200px;
        border: none;        
    }

`

export const Text = styled.span`
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #FFF;
    font-family: 500;
`

export const ContainerIconLocation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const EmailTag = styled.a`
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #FFF;
    font-family: 500;
`