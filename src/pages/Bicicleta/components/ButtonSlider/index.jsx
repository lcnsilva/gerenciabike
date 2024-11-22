import {
    ButtonIcon, ButtonNumber, Container, StyledLink
} from './style.js'

import ciclistIcon from '../../../../assets/icons_bike_slider/ciclist.svg'
import ciclistWhiteIcon from '../../../../assets/icons_bike_slider/ciclistWhite.svg'


const ButtonSlider = ({ index, id, selected }) => {



    return (
        <Container>
            <StyledLink to={`/bicicletas/${id}`}>
                {selected ?
                    <ButtonIcon src={ciclistIcon} $selected={selected}/>
                    : 
                    <ButtonIcon src={ciclistWhiteIcon} />
                }
                <ButtonNumber $selected={selected}>{index}</ButtonNumber>
            </StyledLink>
        </Container>
    )
}

export default ButtonSlider;