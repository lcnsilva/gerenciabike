import {
    Container, ImgBike, Title, ContainerButtons, Button, ButtonMaintenance, ButtonIcon, IdBike, ContainerImgBike, ViewButton,
    StyledLink,
    ViewIcon
} from './CardMiniatura.js'
import availableIcon from './../../assets/icons_card/available.svg'
import maintenanceIcon from './../../assets/icons_card/maintenance.svg'
import viewIcon from '../../assets/icons_card/visualizarMais.svg'
import { useEffect, useState } from 'react';


const CardMiniatura = ( { bicicleta, index } ) => {

    //TROCAR ICON QUANDO ESTIVER INDIPOSNIVEL PRA UM X

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
        <Container key={bicicleta._id}>
            <IdBike >{bicicleta.nome || `Bicicleta ${index}`}</IdBike>
            <ContainerImgBike>
                <ImgBike src={bicicleta.caminhoImagem}/>
            </ContainerImgBike>
            <Title>Disponibilidade:</Title>
            <ContainerButtons>
                <Button $isAvailable={isAvailable}>
                    <ButtonIcon src={availableIcon} />
                </Button>
                <ButtonMaintenance $isMaintenance={isMaintenance}>
                    <ButtonIcon src={maintenanceIcon}/>
                </ButtonMaintenance>
            </ContainerButtons>
            {haveToken &&
                    <ViewButton>
                        <StyledLink to={`/bicicletas/${bicicleta._id}`}>
                            <ViewIcon src={viewIcon}/>Visualizar
                        </StyledLink>
                    </ViewButton>
            }
        </Container>
    )
}

export default CardMiniatura;