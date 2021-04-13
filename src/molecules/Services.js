import Button from "../atoms/Button"
import { Container, FlexContainer } from "../atoms/Container"
import Image from "../atoms/Image"
import Text from "../atoms/Text"

const Services = () => <FlexContainer background_color="var(--white)" border_radius="1em" padding="1em 0" margin="2em" min_width="70%" width="50em">
    <FlexContainer align_items="center" border_right="1px solid var(--silver)" padding="0 1em" width="25%">
        <Image margin="0 1em 0 0" 
        src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/caja-info-home.svg" 
        width="3em" />
        <Container>
            <Text>Comprá en el exterior de modo fácil, rápido y seguro.
                <Button><Text color="var(--dodger-blue)">Cómo comprar</Text></Button>
            </Text>
        </Container>
    </FlexContainer>
    <FlexContainer align_items="center" border_right="1px solid var(--silver)" padding="0 1em" width="25%">
        <Image margin="0 1em 0 0" 
        src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/avion-info-home.svg" 
        width="3em" />
            <Text>Sin trámites en la aduana. ¡Hacemos todo por vos!
                <Button><Text color="var(--dodger-blue)">Saber más</Text></Button>
            </Text>
    </FlexContainer>
    <FlexContainer align_items="center" border_right=".1em solid var(--black-haze)" padding="0 1em" width="25%">
        <FlexContainer align_items="center" justify_content="center" flex_wrap height="100%" margin="0 1em 0 0" >
            <FlexContainer>
                <FlexContainer align_items="center" border="1px solid var(--black-haze)" height="2.3em" margin="0 .2em .2em 0" padding=".1em" width="2em">
                    <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/visa.svg"/>
                </FlexContainer>
                <FlexContainer align_items="center" border="1px solid var(--black-haze)" height="2.3em" margin="0 0 .2em 0" padding=".1em" width="2em">
                    <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/mastercard.svg"/>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer>
                <FlexContainer align_items="center" border="1px solid var(--black-haze)" height="2.3em" margin="0 .2em 0 0" padding=".1em 0" width="2em">
                    <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/american_express.svg"/>
                </FlexContainer>
                <FlexContainer align_items="center" border="1px solid var(--black-haze)" height="2.3em" padding=".1em" width="2em">
                    <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/rapipago.svg"/>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
            <Text>Pagá en pesos y con hasta 12 cuotas fijas.
                <Button><Text color="var(--dodger-blue)">Ver más</Text></Button>
            </Text>
    </FlexContainer>
    <FlexContainer align_items="center" padding="0 1em" width="25%">
        <Image margin="0 1em 0 0" 
        src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/headphones-info-home.svg" 
        width="3em" />
        <Text>Ayuda y asesoramiento en nuestro
            <Button><Text color="var(--dodger-blue)">centro de ayuda.</Text></Button>
        </Text>
    </FlexContainer>
</FlexContainer>

export default Services