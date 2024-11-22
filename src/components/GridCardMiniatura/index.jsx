import {
    Card, Container
} from './GridCardMiniatura.js'


const GridCardMiniatura = ( {bicicletas} ) => {

    return (
        <Container>
            {bicicletas.map((bicicleta, index) =>  
                <Card bicicleta={bicicleta} key={bicicleta._id || index} index={index}/>
            )}
        </Container>
    )
}

export default GridCardMiniatura;