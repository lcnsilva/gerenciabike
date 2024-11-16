import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import {  Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/icons_menu/whitebike.svg'
import * as S from './style.js'
import api from '../../services/api.js';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setUser((prevUser) => ({
                ...prevUser,
                [name]: value
            }));
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await api.post('/usuario/login', {
                email: user.email,
                password: user.password
            });
            const data = response.data;
            if (!data.token) {
                toast.error(data.msg , {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                    });
            }
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/home');
                setUser({
                    email: '',
                    password: ''
                });
            }                 
        } catch (error) {
            if(error.response){
                toast.error(error.response.data.msg , {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                    });
            }
            console.log(error);
        }
    }
    return (
        <S.Wrapper>
            <ToastContainer/>
            <S.LogoLogin src={logo} alt='Logo'></S.LogoLogin>
            <S.Card onSubmit={handleSubmit}>
                <S.Title>Entrar na sua conta</S.Title>
                <S.Input
                    placeholder='Email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    maxLength={50}
                ></S.Input>
                <S.Input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    minLength={4}
                    maxLength={40}
                ></S.Input>
                <S.PasswordContainer>
                    <S.RememberContainer>
                        <S.RememberInput type='radio' id='rememberMe'></S.RememberInput>
                        <S.RememberLabel htmlFor="rememberMe">Lembrar-me</S.RememberLabel>
                    </S.RememberContainer>                    
                    <S.RememberLink to='/recuperar'>Esqueceu a senha?</S.RememberLink>
                </S.PasswordContainer>
                <S.SignButton type='submit'>Entre com seu email</S.SignButton>
                <S.RegisterText>Não tem uma conta? <S.RememberLink to='/registro' >Registre-se</S.RememberLink></S.RegisterText>
            </S.Card>
        </S.Wrapper>
    )
}

export default Login;