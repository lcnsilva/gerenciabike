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
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem; 
    border-radius: 25px;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    @media (min-width: ${size.tablet}) {
        margin: 0;
    }
`

export const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    box-sizing:border-box;
    width: 100%;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border: 2px solid black;
    font-size: 16px;
    padding: 1rem;
`

export const Label = styled.label`
    color: black;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    padding: 0.5rem 0;
`

export const ContainerState = styled.div`
    display: flex;
    flex-direction: column;
`

export const SelectState = styled.select`
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border: 2px solid black;
    padding: 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    
`

export const OptionState = styled.option`
    color: black;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

export const Button = styled.button`
    width: 50%;
    background-color: #1B262C;
    color: #FFFFFF;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    padding: 1rem 0;
`

export const Title = styled.h2`
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const ButtonAvailable = styled.button`
    background-color: ${props => props.$isAvailable ? 'green' : 'red'};
    width: 45px;
    height: 45px;
    border: 2px solid #1B262C;
    border-radius: 8px;
` 

export const ButtonMaintenance = styled.button`
    background-color: ${props => props.$isMaintenance ? 'orange' : 'white'};
    width: 45px;
    height: 45px;
    border: 2px solid #1B262C;
    border-radius: 8px;
`

export const ButtonIcon = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 20px;
` 