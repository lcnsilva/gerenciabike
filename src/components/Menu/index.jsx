
import "./Menu.css"
import { slide as Menu} from 'react-burger-menu'
import bike from '../../assets/icons_menu/bike.svg'
import home from '../../assets/icons_menu/home.svg'
import alerta from '../../assets/icons_menu/notifications.svg'
import relatorio from '../../assets/icons_menu/relatorio.svg'
import settings from '../../assets/icons_menu/settings.svg'
import feedback from '../../assets/icons_menu/Grupo.svg'
import botaoSair from '../../assets/icons_menu/sign-out.svg'
import fecharIcon from '../../assets/icons_menu/white-cross.svg'
import profilePicture from '../../assets/icons_menu/blank-profile-picture.svg'
import burgerIcon from '../../assets/icons_menu_inicial/menu-burger.svg'
import { Link, useNavigate } from "react-router-dom"


const MenuLateral = () => {
    //criar lógica para pegar o nome/user 
    var nome = "Usuario Teste"
    var username = "@usuario_teste"

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (        
            <Menu customCrossIcon={ <img src={fecharIcon} /> } customBurgerIcon={ <img src={burgerIcon}/> }>
                <div className="menu-item profile">
                    <img className="profile-picture" src={profilePicture}/>
                    <div className="container-info">
                        <h2 className="name">{nome}</h2>
                        <h3 className="username">{username}</h3>
                    </div>                    
                </div>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={home} />
                Inicio
            </Link>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={bike} />
                Bicicletas
            </Link>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={alerta} />
                Alerta
            </Link>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={relatorio} />
                Relatório
            </Link>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={feedback} />
                Feedback
            </Link>
            <Link to='/home' className="menu-item">
                <img className="menu-item-icon" src={settings} />
                Configurações
            </Link>
            <Link to='/' className="menu-item logout" onClick={handleLogout}>
                <img className="menu-item-icon" src={botaoSair} />
                <span>Sair</span>
            </Link>
            </Menu>
    )
}

export default MenuLateral;