import './style.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='card'>
            <h1>Entrar na sua conta</h1>
            <input placeholder='Email' type='email'/>
            <input placeholder='Senha' type='password'/>
            <div className='password__container'>
                <div className='remember__container'>
                    <input type='radio' id='rememberMe'/>
                    <label htmlFor="rememberMe">Lembrar-me</label>
                </div>
                <Link to='/recuperar' className='link'>Esqueceu a senha?</Link>
            </div>
            <button className='button__signIn'>Entrar com email</button>
            <p>Não tem uma conta? <Link to='/registro' className='link'>Registre-se</Link></p>
        </div>    
    )
}

export default Login;