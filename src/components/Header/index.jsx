import MenuAuthenticated from '../Menu/index.jsx';
import iconLogin from '../../assets/icons_header/login.svg'
import profilePicture from '../../assets/icons_menu/blank-profile-picture.svg'
import MenuNoAuthenticated from '../MenuInicial/index.jsx';
import {
    WrapperHeader, SideBarContainer, Title, Icon, ContainerIcon
} from './Header.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const haveToken = !!localStorage.getItem('token');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);
    return (
        isMobile ? (
            <WrapperHeader>
                <SideBarContainer>
                    {haveToken ? <MenuAuthenticated /> : <MenuNoAuthenticated />}
                </SideBarContainer>
                <Title>{props.title}</Title>
                {haveToken ?
                    <ContainerIcon>
                        <Icon src={profilePicture}></Icon>
                    </ContainerIcon>
                    :
                    <ContainerIcon>
                        <Link to='/login'>
                            <Icon src={iconLogin} />
                        </Link>
                    </ContainerIcon>
                }
            </WrapperHeader>
        )
            :
            (
                <WrapperHeader>
                    <SideBarContainer>
                        {haveToken ? <MenuAuthenticated /> : <MenuNoAuthenticated/>}
                    </SideBarContainer>
                    <Title>{props.title}</Title>
                    {haveToken ?
                        <ContainerIcon>
                            <Icon src={profilePicture}></Icon>
                        </ContainerIcon>
                        :
                        <ContainerIcon>
                            <Link to='/login'>
                                <Icon src={iconLogin} />
                            </Link>
                        </ContainerIcon>
                    }
                </WrapperHeader>
            )

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