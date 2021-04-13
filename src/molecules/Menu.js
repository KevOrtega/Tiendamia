import Button from "../atoms/Button"
import { BarsIcon } from "../atoms/Icon"
import { FlexContainer } from "../atoms/Container"
import Text from "../atoms/Text"

const Menu = () => <FlexContainer align_items="flex-end" 
background_color="var(--coral-red)"
flex_wrap
min-height="2em" 
justify_content="space-evenly" 
padding="0 0 .5em 0"
width="100%">
    <Button margin="1em">
        <BarsIcon color="#fff" size="1.3em" />
        <Text color="var(--white)" margin="0 0 0 .5em">Todas las categorías</Text>
    </Button>
    <FlexContainer margin="1em">
        <Button margin="0 1em 0 0"><Text color="var(--white)">Ofertas de la semana</Text></Button>
        <Button margin="0 1em 0 0"><Text color="var(--white)">Cómo comprar</Text></Button>
        <Button margin="0 1em 0 0"><Text color="var(--white)">Costos y tarifas</Text></Button>
        <Button margin="0 1em 0 0"><Text color="var(--white)">Mis pedidos</Text></Button>
        <Button margin="0 1em 0 0"><Text color="var(--white)">Invita y gana</Text></Button>
        <Button><Text color="var(--white)">Garantía de entrega</Text></Button>
    </FlexContainer>
    <Text color="var(--white)" font_size="1.2em" margin="0.8em">¡6 cuotas sin. int. con Amex!</Text>
</FlexContainer>

export default Menu