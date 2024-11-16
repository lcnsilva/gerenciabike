import {
    Container, ImgBike, Title, ContainerButtons, Button, ButtonMaintenance, ButtonIcon, IdBike, ContainerImgBike
} from './CardMiniatura.js'
import availableIcon from './../../assets/icons_card/available.svg'
import maintenanceIcon from './../../assets/icons_card/maintenance.svg'

import { useEffect, useState } from 'react';


const CardMiniatura = ( { bicicleta, index } ) => {

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
            <IdBike >{bicicleta.nome || `Bicicleta ${index}`}</IdBike>            
        </Container>
    )
}

export default CardMiniatura;