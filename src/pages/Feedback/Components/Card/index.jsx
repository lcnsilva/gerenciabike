
import { Button, Container, Input, InputBox, Label, Form, TextArea } from "./style.js"

const Card = () => {
    return(
        <Container>
                <Form>
                    <InputBox>
                        <Label>Nome ou Email:</Label> 
                        <Input type='text' placeholder='' required />
                    </InputBox>
                    <InputBox>
                        <Label>Bicicleta:</Label>
                        <Input type='text' placeholder='' required />
                    </InputBox>
                    <InputBox>
                        <Label>Tópico:</Label>
                        <Input type='text' placeholder='' required />
                    </InputBox>
                    <InputBox>
                        <Label>Mensagem:</Label>
                        <TextArea id="w3review" name="w3review" rows="6" > </TextArea>
                    </InputBox>
                    <Button type="submit">Confirmar</Button>
                </Form>
            </Container>
    );
};

export default Card