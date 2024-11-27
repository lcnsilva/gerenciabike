import { useParams } from "react-router-dom";
import {
    Container, ButtonContainer, Button,
    IconButton,
    TitleButton,
    PageContainer,
    ContainerCard,
    StyledChart,
    ContainerDesktop,
    ContainerCharts,
    ContainerCardDesktop,
    PageContainerDesktop,
    ContainerData,
    ContainerSlider,
    ContainerListaManutencao,
    ContainerTest
} from "./style.js";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Slider from "./components/Slider";
import deleteIcon from '../../assets/icons_bike/delete.svg'
import editIcon from '../../assets/icons_bike/edit.svg'
import Card from "./components/Card/index.jsx";
import CardDesktop from "./components/CardDesktop/index.jsx";
import Table from "../../components/Table/index.jsx";


const Bicicleta = () => {

    const [bicicleta, setBicicleta] = useState({});
    const [bicicletaIndex, setBicicletaIndex] = useState();
    const [editSelected, setEditSelected] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
    const { id } = useParams();

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 1280);
    };

    const handleEdit = () => {
        setEditSelected(true);
    }

    const handleCancel = () => {
        setEditSelected(false);
    };

    const fetchBicicleta = async (id) => {
        try {
            const response = await api.get(`/bicicletas`);
            const data = response.data;
            const index = data.findIndex((bicicleta) => bicicleta._id === id);
            setBicicleta(data[index]);
            setBicicletaIndex(index);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setEditSelected(false);
        fetchBicicleta(id);
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [id])

    return (
        isMobile ? (
            <Container id='outer-container'>
                <Header title={`${bicicleta.nome || ''}`} />
                <PageContainer id="page-wrap">
                    <Slider bicicletaIndex={bicicletaIndex} />
                    <ContainerCard>
                        <Card
                            bicicleta={bicicleta}
                            editSelected={editSelected}
                            onCancel={handleCancel}
                            fetchBicicleta={fetchBicicleta} />
                    </ContainerCard>
                    <ButtonContainer>
                        <Button onClick={handleEdit} name="editButton">
                            <IconButton src={editIcon} />
                            <TitleButton >Editar</TitleButton>
                        </Button>
                        <Button >
                            <IconButton src={deleteIcon} />
                            <TitleButton>Excluir</TitleButton>
                        </Button>
                    </ButtonContainer>
                    <StyledChart />
                    <Table ></Table>
                </PageContainer>
            </Container>
        ) : (
            <ContainerDesktop id='outer-container'>
                <Header title={`${bicicleta.nome || ''}`} />
                <PageContainerDesktop id="page-wrap">
                    <ContainerData>
                        <ContainerCardDesktop>
                            <CardDesktop
                            bicicleta={bicicleta}
                            fetchBicicleta={fetchBicicleta} />
                        </ContainerCardDesktop>
                        <ContainerCharts>
                            <ContainerListaManutencao>
                                <Table/>
                            </ContainerListaManutencao>
                            <ContainerTest>
                                <StyledChart />
                            </ContainerTest>
                        </ContainerCharts>
                    </ContainerData>
                    <ContainerSlider>
                        <Slider bicicletaIndex={bicicletaIndex} />
                    </ContainerSlider>
                </PageContainerDesktop>
            </ ContainerDesktop>
        )

    )
}

export default Bicicleta;