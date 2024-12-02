
import "../Menu/Menu.css"
import { push as Menu} from 'react-burger-menu'
import home from '../../assets/icons_menu/home.svg'
import login from '../../assets/icons_menu_inicial/login.svg'
import sobre from '../../assets/icons_menu_inicial/sobre.svg'
import feedback from '../../assets/icons_menu_inicial/feedback.svg'
import burgerIcon from '../../assets/icons_menu_inicial/menu-burger.svg'
import fecharIcon from '../../assets/icons_menu/white-cross.svg'
import profilePicture from '../../assets/icons_menu/blank-profile-picture.svg'
import { Link } from "react-router-dom"


const MenuInicial = () => {
    //criar lógica para pegar o nome/user direto do storage
    var nome = "Usuario Teste"
    var username = "@usuario_teste"
    return (        
            <Menu 
            customBurgerIcon={ <img src={burgerIcon}/> } 
            customCrossIcon={ <img src={fecharIcon} /> } 
            pageWrapId={ "page-wrap" }
            outerContainerId={ "outer-container" }
            >
                <div className="menu-item profile">
                    <img className="profile-picture" src={profilePicture}/>
                    <div className="container-info">
                        <h2 className="name">{nome}</h2>
                        <h3 className="username">{username}</h3>
                    </div>                    
                </div>
            <Link to='/' className="menu-item">
                <img className="menu-item-icon" src={home} />
                Inicio
            </Link>
            <Link to='/login' className="menu-item">
                <img className="menu-item-icon" src={login} />
                Login
            </Link>
            <Link to='/feedback' className="menu-item">
                <img className="menu-item-icon" src={feedback} />
                Feedback
            </Link>
            <Link to='/sobre' className="menu-item">
                <img className="menu-item-icon" src={sobre} />
                Sobre
            </Link>
            </Menu>
    )
}

export default MenuInicial;