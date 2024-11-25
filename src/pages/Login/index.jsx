import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import {  Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/icons_menu/whitebike.svg'
import {
    Wrapper, Card, Title, Input, PasswordContainer, RememberContainer, RememberInput, RememberLabel, RememberLink, SignButton, RegisterText, LogoLogin,
    ContainerLogo
} from './style.js'
import api from '../../services/api.js';
import { useRef } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const toastId = useRef(null);

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

    const loadingNotification = () => toastId.current = toast.loading("Carregando..");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            loadingNotification();
            const response = await api.post('/usuario/login', {
                email: user.email,
                password: user.password
            });
            const data = response.data;
            if (!data.token) {
                toast.update(toastId.current, { render: data.msg, type: 'error', isLoading: false, autoClose:4000})
                toast.error(data.msg);
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
                toast.update(toastId.current, { render: error.response.data.msg, type: 'error', isLoading: false, autoClose:4000});
            }
            console.log(error);
        }
    }
    return (
        <Wrapper>
            <ToastContainer
                limit={1}
                position= "bottom-center"
                autoClose={4000}
                hideProgressBar= {false}
                closeOnClick= {true}
                pauseOnHover= {true}
                draggable= {true}
                progress= {undefined}
                theme= "light"
                transition= {Slide}
            />
            <ContainerLogo>
                <Link to='/'>
                    <LogoLogin src={logo} alt='Logo'></LogoLogin>
                </Link>
            </ContainerLogo>
            <Card onSubmit={handleSubmit}>
                <Title>Entrar na sua conta</Title>
                <Input
                    placeholder='Email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    maxLength={50}
                ></Input>
                <Input
                    placeholder='Senha'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    minLength={4}
                    maxLength={40}
                ></Input>
                <PasswordContainer>
                    <RememberContainer>
                        {/* <S.RememberInput type='radio' id='rememberMe'></S.RememberInput>
                        <S.RememberLabel htmlFor="rememberMe">Lembrar-me</S.RememberLabel> */}
                    </RememberContainer>                    
                    <RememberLink to='/recuperar'>Esqueceu a senha?</RememberLink>
                </PasswordContainer>
                <SignButton type='submit'>Entre com seu email</SignButton>
                <RegisterText>Não tem uma conta? <RememberLink to='/registro' >Registre-se</RememberLink></RegisterText>
            </Card>
        </Wrapper>
    )
}

export default Login;