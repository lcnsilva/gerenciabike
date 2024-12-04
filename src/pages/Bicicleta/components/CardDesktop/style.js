import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem; 
    border-radius: 25px;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    width: 95%;
`

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
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
    border-radius: 16px;
    padding: 1rem 0;
`

export const Title = styled.h2`
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
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

export const ButtonContainer = styled.div`
    align-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
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

export const EditButton = styled.button`
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

export const ContainerData = styled.div`
    width: 65%;
`

export const ContainerAllButtons = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerImgBike = styled.div`
    width: 100%;
    border-radius: 20px;
    border-radius: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgBike = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 20px;
`

export const ContainerAvailable = styled.div`
    display: flex;
    flex-direction: column;
`