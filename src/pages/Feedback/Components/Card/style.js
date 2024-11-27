import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem; 
    height: auto;
    border-radius: 25px;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
`

export const Form = styled.form`
    padding: 1rem;
`

export const InputBox = styled.div`
    width: 100%;
    position: relative;
    margin: 20px 0;

`

export const Label = styled.label`
    color: black;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    padding: 1rem 0;
`

export const Input = styled.input`
    width: 95%;
    height: 44px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border: 1px solid black;
    font-size: 16px;
    padding: 0 0.5rem;
`

export const TextArea = styled.textarea`
    width: 95%;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: #f5f5f5;
    border: 1px solid black;
    font-size: 16px;
    padding: 0 0.5rem;
`

export const Button = styled.button`
    background-color: #1B262C;
    color: #fff;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
`