import { useParams } from "react-router-dom";
import {
    Container, ButtonContainer, Button,
    IconButton,
    TitleButton,
    PageContainer
} from "./style.js";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Slider from "./components/Slider";
import deleteIcon from '../../assets/icons_bike/delete.svg'
import editIcon from '../../assets/icons_bike/edit.svg'
import Card from "./components/Card/index.jsx";


const Bicicleta = () => {

    const [bicicleta, setBicicleta] = useState({});
    const [bicicletaIndex, setBicicletaIndex] = useState();
    const [editSelected, setEditSelected] = useState(false);
    const { id } = useParams();

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
    }, [id])

    return (
        <Container id='outer-container'>
            <Header title={`${bicicleta.nome || ''}`} />
            <PageContainer id="page-wrap">
                <Slider bicicletaIndex={bicicletaIndex} />
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
                <Card 
                bicicleta={bicicleta} 
                editSelected={editSelected} 
                onCancel={handleCancel} 
                fetchBicicleta={fetchBicicleta}/>
                
            </PageContainer>

        </Container>
    )
}

export default Bicicleta;