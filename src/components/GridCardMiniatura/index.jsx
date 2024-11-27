import { useEffect, useState } from 'react';
import {
    Card, Container
} from './GridCardMiniatura.js'
import CardDesktop from '../CardMiniaturaDesktop/index.jsx';


const GridCardMiniatura = ({ bicicletas }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 1280);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [])

    return (
        isMobile ? 
        <Container>
            {bicicletas.map((bicicleta, index) =>
                <Card bicicleta={bicicleta} key={bicicleta._id || index} index={index} />
            )}
        </Container> 
        :
        <Container>
            {bicicletas.map((bicicleta, index) =>
                <CardDesktop bicicleta={bicicleta} key={bicicleta._id || index} index={index} />
            )}
        </Container>

    )
}

export default GridCardMiniatura;