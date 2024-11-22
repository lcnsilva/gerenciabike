import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
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