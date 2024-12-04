import { Link } from 'react-router-dom';
import styled from 'styled-components'

const size = {
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1280px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const Wrapper = styled.div`
    --cor-de-fundo-card: #FFFFFF;
    --cor-de-fundo-input-card: #EAEAEA;
    --cor-de-fundo-botao-card: #3F72AF;
    --cor-link-card: #3F72AF;
    --cor-input-placeholder-card: #A0AEC0;
    background-color: #1B262C;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const Card = styled.form`
    width: 80%;
    height: auto;
    background-color: var(--cor-de-fundo-card);
    padding: 2rem 1rem;
    border-radius: 20px;
    font-family: "Outfit", sans-serif;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    @media (min-width: ${size.tablet}) {
        width: 55%;
        height: auto;
    }
    @media (min-width: ${size.laptop}) {
        width: 45%;
        height: auto;
    }
    @media (min-width: ${size.laptopM}) {
        width: 35%;
        height: auto;
    }
    @media (min-width: ${size.laptopL}) {
        width: 25%;
        height: auto;
    }
    @media (min-width: ${size.desktop}) {
        width: 15%;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    line-height: 140%;
`

export const Input = styled.input`
    background-color: var(--cor-de-fundo-input-card);
    padding: 1rem 1rem;
    width: 90%;
    border-radius: 8px;
    line-height: 100%;
    font-size: 16px;
    ::placeholder{
        font-weight: 500;
        font-size: 16px;
        color: var(--cor-input-placeholder-card);
    }
`

export const PasswordContainer = styled.div `
    width: 100%;
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    align-items: center;
`

export const RememberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const RememberInput = styled.input`
    width: 20px;
`

export const RememberLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    width: 100%;
`

export const RememberLink = styled(Link)`
    text-decoration: none;
    color: var(--cor-link-card);
    font-weight: 700;
`

export const SignButton = styled.button`
    width: 100%;
    padding: 1rem 0;
    background-color: var(--cor-de-fundo-botao-card);
    border-radius: 8px;
    font-family: "Outfit", sans-serif;
    font-size: 18px;
    font-weight: 600;
`

export const RegisterText = styled.p`
    font-weight: 500;
    color: #718096;
`

export const LogoLogin = styled.img`
    width: 150px;
    height: auto;
    @media (min-width: ${size.tablet}) {
        width: 200px;
    }
    @media (min-width: ${size.laptop}) {
        width: 250px;
    }
    @media (min-width: ${size.laptopM}) {
        width: 200px;
    }
    @media (min-width: ${size.laptopL}) {
        width: 250px;
    }
`

export const ContainerLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`