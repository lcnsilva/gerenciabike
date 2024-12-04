import { useEffect, useState } from 'react';
import {
    Button, Container, ContainerButton, ContainerInput, ContainerState, Form, Input, Label, OptionState, SelectState, Title, ContainerButtons, ButtonAvailable, ButtonMaintenance, ButtonIcon
} from './style.js'
import api from '../../../../services/api.js';
import availableIcon from '../../../../assets/icons_card/available.svg';
import maintenanceIcon from '../../../../assets/icons_card/maintenance.svg';
import deleteIcon from '../../../../assets/icons_bike/delete.svg'
import editIcon from '../../../../assets/icons_bike/edit.svg'
import { ButtonContainer } from './style.js';
import { IconButton } from './style.js';
import { TitleButton } from './style.js';
import { EditButton } from './style.js';
import { ContainerData } from './style.js';
import { ContainerAllButtons } from './style.js';
import { ContainerImgBike } from './style.js';
import { ImgBike } from './style.js';

const CardDesktop = ({ bicicleta, fetchBicicleta }) => {

    const [isAvailable, setIsAvailable] = useState();
    const [isMaintenance, setIsMaintenance] = useState();
    const [editMode, setEditMode] = useState(false);
    const [newBicicleta, setNewBicicleta] = useState(
        {
            _id: '',
            tagRfid: '',
            nome: '',
            disponivel: false,
            manutencao: false,
            caminhoImagem: ''
        }
    );

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleCancel = () => {
        setEditMode(false);
    }


    useEffect(() => {
        setIsAvailable(bicicleta.disponivel);
        if (bicicleta.manutencao) {
            setIsAvailable(false);
        }
        setIsMaintenance(bicicleta.manutencao);
        if (bicicleta) {
            setNewBicicleta({
                _id: bicicleta._id || '',
                tagRfid: bicicleta.tagRfid || '',
                nome: bicicleta.nome || '',
                disponivel: bicicleta.disponivel || false,
                manutencao: bicicleta.manutencao || false,
                caminhoImagem: bicicleta.caminhoImagem || ''
            });
        }
        setEditMode(false);
    }, [bicicleta]);


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await api.put(`/bicicletas/${newBicicleta._id}`, newBicicleta);
            const updatedBicicleta = response.data;
            fetchBicicleta(updatedBicicleta._id);
            handleCancel();
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            if (name === 'disponibilidade') {
                if (value === 'Disponível') {
                    setNewBicicleta((prevBicicleta) => ({
                        ...prevBicicleta,
                        disponivel: true,
                        manutencao: false
                    }));
                } else if (value === 'Indisponível') {
                    setNewBicicleta((prevBicicleta) => ({
                        ...prevBicicleta,
                        disponivel: false,
                        manutencao: false
                    }));
                } else if (value === 'Manutenção') {
                    setNewBicicleta((prevBicicleta) => ({
                        ...prevBicicleta,
                        disponivel: false,
                        manutencao: true
                    }));
                }
            } else {
                setNewBicicleta((prevBicicleta) => ({
                    ...prevBicicleta,
                    [name]: value
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <ContainerData>
                    <Title>{bicicleta.nome || `Bicicleta`}</Title> 
                    <ContainerImgBike>
                        <ImgBike src={bicicleta.caminhoImagem} />
                    </ContainerImgBike>
                    <ContainerInput>
                        <Label htmlFor='id'>Tag RFID:</Label>
                        <Input
                            name='tagRfid'
                            type='text'
                            placeholder=''
                            disabled={true}
                            onChange={handleChange}
                            value={newBicicleta.tagRfid || ''} />
                    </ContainerInput>
                    <ContainerInput>
                        <Label htmlFor='modelo'>Nome da Bicicleta:</Label>
                        <Input
                            name='nome'
                            type='text'
                            placeholder=''
                            disabled={!editMode}
                            onChange={handleChange}
                            value={newBicicleta.nome || ''}
                        />
                    </ContainerInput>
                    <ContainerState>
                        <Label>Disponibilidade:</Label>
                        <SelectState
                            name='disponibilidade'
                            disabled={!editMode}
                            onChange={handleChange}
                            value={
                                newBicicleta.manutencao ? 'Manutenção' :
                                    newBicicleta.disponivel ? 'Disponível' : 'Indisponível'
                            }
                        >
                            <OptionState value="" disabled>
                                Escolha uma opção
                            </OptionState>
                            <OptionState value="Disponível">
                                Disponível
                            </OptionState>
                            <OptionState value="Indisponível">
                                Indisponível
                            </OptionState>
                            <OptionState value="Manutenção">
                                Manutenção
                            </OptionState>
                        </SelectState>
                    </ContainerState>
                    <ContainerInput>
                        <Label htmlFor='modelo'>Link da imagem:</Label>
                        <Input
                            name='caminhoImagem'
                            type='text'
                            placeholder=''
                            disabled={!editMode}
                            onChange={handleChange}
                            value={newBicicleta.caminhoImagem || ''}
                        />
                    </ContainerInput>
                </ContainerData>
                <ContainerAllButtons>
                    <Title>Disponibilidade:</Title>
                    <ContainerButtons>
                        <ButtonAvailable $isAvailable={isAvailable}>
                            <ButtonIcon src={availableIcon} />
                        </ButtonAvailable>
                        <ButtonMaintenance $isMaintenance={isMaintenance}>
                            <ButtonIcon src={maintenanceIcon} />
                        </ButtonMaintenance>
                    </ContainerButtons>
                    {editMode ?
                        <ContainerButton>
                            <Button type='button' onClick={handleCancel}>Cancelar</Button>
                            <Button type='submit'>Salvar</Button>
                        </ContainerButton>
                        :
                        <ButtonContainer>
                            <EditButton onClick={handleEdit} name="editButton">
                                <IconButton src={editIcon} />
                                <TitleButton >Editar</TitleButton>
                            </EditButton>
                            <EditButton name="deleteButton">
                                <IconButton src={deleteIcon} />
                                <TitleButton>Excluir</TitleButton>
                            </EditButton>
                        </ButtonContainer>
                    }
                </ContainerAllButtons>
                
            </Form>
        </Container>
    )
}

export default CardDesktop;