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