import { 
    Address,
    Container, ContainerIconLocation, Email, EmailTag, Icon,
    IconText,
    Text
} from './Footer.js'

import iconLogo from '../../assets/icons_header/logo3.svg'
import iconEmail from '../../assets/icons_header/Email.svg'
import iconLocalizacao from '../../assets/icons_header/Localizacao.svg'


const Footer = () => {
    return (
        <Container>
            <Address>
                <IconText src={iconLocalizacao} />
                <ContainerIconLocation>
                    <Text> SENAI Lauro de Freitas</Text>
                    <Text>Av. Luiz Tarquínio Pontes</Text>
                    <Text>BA - 42702-000</Text>
                </ContainerIconLocation>                
            </Address>
            <Email>
                <IconText src={iconEmail} />
                <EmailTag href='mailto:gerenciabike.contato@gmail.com'>gerenciabike.contato@gmail.com</EmailTag>
            </Email>
            <Icon src={iconLogo} />

        </Container>
    )
}

export default Footer;