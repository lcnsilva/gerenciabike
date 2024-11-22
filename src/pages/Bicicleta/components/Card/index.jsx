import { useEffect, useState } from 'react';
import {
    Button, Container, ContainerButton, ContainerInput, ContainerState, Form, Input, Label, OptionState, SelectState
} from './style.js'
import api from '../../../../services/api.js';

const Card = ({ bicicleta, editSelected, onCancel, fetchBicicleta }) => {

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

    const handleCancel = () => {
        onCancel();
        setEditMode(!editSelected);
    }

    useEffect(() => {
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
        if (editSelected) {
            setEditMode(true);
        }
    }, [bicicleta, editSelected]);


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
                <ContainerInput>
                    <Label htmlFor='id'>Tag RFID:</Label>
                    <Input
                        name='tagRfid'
                        type='text'
                        placeholder=''
                        disabled={!editMode}
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
                {editMode && <ContainerButton>
                    <Button type='button' onClick={handleCancel}>Cancelar</Button>
                    <Button type='submit'>Salvar</Button>
                </ContainerButton>}


            </Form>
        </Container>
    )
}

export default Card;