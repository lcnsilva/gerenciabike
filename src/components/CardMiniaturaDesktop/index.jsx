import { useEffect, useState } from 'react';
import {
    Button, ButtonIcon, ButtonMaintenance, Container, ContainerButtons, ContainerImg, ContainerImgBike, ContainerInfo, ImgBike, StyledLink, Title, TitleImg, ViewButton, ViewIcon
} from './style.js'
import availableIcon from './../../assets/icons_card/available.svg'
import maintenanceIcon from './../../assets/icons_card/maintenance.svg'
import viewIcon from '../../assets/icons_card/visualizarMais.svg'

const CardMiniaturaDesktop = ({ bicicleta, index }) => {

    const haveToken = !!localStorage.getItem('token');
    const [isAvailable, setIsAvailable] = useState();
    const [isMaintenance, setIsMaintenance] = useState();

    useEffect(() => {
        setIsAvailable(bicicleta.disponivel);
        if(bicicleta.manutencao){
            setIsAvailable(false);
        }
        setIsMaintenance(bicicleta.manutencao);
    }, [bicicleta]);

    return (
        <Container>
            <ContainerImg>
                <TitleImg>{bicicleta.nome || `Bicicleta ${index}`}</TitleImg>
                <ContainerImgBike>
                    <ImgBike src={bicicleta.caminhoImagem} />
                </ContainerImgBike>
            </ContainerImg>
            <ContainerInfo>
                <Title>Disponibilidade</Title>
                <ContainerButtons>
                    <Button $isAvailable={isAvailable}>
                        <ButtonIcon src={availableIcon} />
                    </Button>
                    <ButtonMaintenance $isMaintenance={isMaintenance}>
                        <ButtonIcon src={maintenanceIcon} />
                    </ButtonMaintenance>
                </ContainerButtons>
                {!haveToken && <div></div>}
                {haveToken &&
                    <ViewButton>
                        <StyledLink to={`/bicicletas/${bicicleta._id}`}>
                            <ViewIcon src={viewIcon}/>Visualizar
                        </StyledLink>
                    </ViewButton>
                }
            </ContainerInfo>
        </Container>
    )
}

export default CardMiniaturaDesktop;