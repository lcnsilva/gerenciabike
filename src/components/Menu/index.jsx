
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



const MenuLateral = () => {
    var nome = "Usuario Teste"
    var username = "@usuario_teste"
    const endpoint = "/"
    return (        
            <Menu customCrossIcon={ <img src={fecharIcon} /> }>
                <div className="menu-item profile">
                    <img className="profile-picture" src={profilePicture}/>
                    <div className="container-info">
                        <h2 className="name">{nome}</h2>
                        <h3 className="username">{username}</h3>
                    </div>                    
                </div>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={home}/>
                    Inicio
                </a>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={bike}/>
                    Bicicletas
                </a>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={alerta}/>
                    Alerta
                </a>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={relatorio}/>
                    Relatório
                </a>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={feedback}/>
                    Feedback
                </a>
                <a className="menu-item" href={endpoint}>
                    <img className="menu-item-icon" src={settings}/>
                    Configurações
                </a>
                <a className="menu-item logout" href={endpoint}>
                    <img className="menu-item-icon" src={botaoSair}/>
                    <span>Sair</span>
                </a>
            </Menu>
    )
}

export default MenuLateral;