import MenuAuthenticated from '../Menu/index.jsx';
import icon from '../../assets/icons_card/white-clock.svg'
import MenuNoAuthenticated from '../MenuInicial/index.jsx';
import {
    WrapperHeader, SideBarContainer, Title, Icon
} from './Header.js'


const Header = (props) => {
    const haveToken = !!localStorage.getItem('token');

    return (
        <WrapperHeader>
            <SideBarContainer>
                {haveToken ? <MenuAuthenticated/> : <MenuNoAuthenticated/>}
            </SideBarContainer>
            <Title>{props.title}</Title>
            <Icon src={icon}/>
        </WrapperHeader>
    )
}

// interface HeaderProps{
//     title : string
// }

// const Header : React.FC <HeaderProps> = ({title }) => {
//     return (
//         <S.WrapperHeader>
//             <MenuLateral/>
//             <S.Title>{title}</S.Title>
//         </S.WrapperHeader>
//     )
// }

export default Header;