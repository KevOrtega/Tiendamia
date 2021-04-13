import Button from "../atoms/Button"
import { Container, FlexContainer } from "../atoms/Container"
import { GetAllProducts } from '../Request.js'
import { HeadingMedium, HeadingSmall } from "../atoms/Heading"
import Image from "../atoms/Image"
import Text from "../atoms/Text"
import Star from "../atoms/Star"

const Products = () => <Container margin="2em 0" width="80%">
    <Button>
        <HeadingMedium>Notebooks (impuestos bajos)</HeadingMedium>
        <Text color="var(--dodger-blue)" margin="0 0 0 1em">Ver más</Text>
    </Button>
    <FlexContainer align_items="center" justify_content="flex-start" margin="2em 0" overflow="hidden" width="auto">
        {GetAllProducts().map((product, i) => <Button 
        justify_content="flex-start"
        background_color="var(--white)" border="1px solid var(--silver)" border_radius="5px"hover_animation
        key={product.title + i}
        margin="1em"
        padding="0 1em">
            <FlexContainer 
            align_items="flex-start"  
            flex_direction="column" 
            height="35em" 
            justify_content="flex-start" 
            overflow="hidden"
            width="16em">
                <Image border_bottom="1px solid var(--black-haze)" 
                border_radius="1em 1em 0 0" 
                margin="0 0 .5em 0"
                src={product.image} />
                <HeadingSmall>{product.title}</HeadingSmall>
                <FlexContainer align_items="center" margin=".5em 0 0" width="100%">
                    <Container border_right="1px solid var(--boulder)" margin="0 .5em 0 0" padding="0 .5em 0 0">
                        <Text line_through>{product.last_price}</Text>
                    </Container>
                    <Container border="1px solid var(--crimson)" padding="0 .5em">
                        <Text color="var(--crimson)" font_size=".8em">{product.discount}</Text>
                    </Container>
                </FlexContainer>
                <FlexContainer align_items="center" margin=".5em 0" width="100%">
                    <Text 
                    color="var(--mine-shaft)"
                    font_family="var(--font-bolder)"
                    font_size="1.2em"
                    margin="0 .5em 0 0">{product.price}</Text> 
                    <Container>
                        <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/express_item.png" />
                    </Container>
                </FlexContainer>
                <Text margin="0 0 .5em 0">Incluye impuestos PAIS y percepción AFIP</Text>
                <FlexContainer>
                    <Star stars={product.stars} />
                </FlexContainer>
                <Text 
                color="var(--mine-shaft)"
                font_family="var(--font-bolder)"
                font_size="1.2em"
                line_height=".1em"
                margin="1.5em 0 0">
                    3 CUOTAS SIN INT con tarjetas 
                    <Image 
                    src="https://tiendamia.com/skin/frontend/traigo/traigo/images/svg/logo-naranja-hortal.svg"
                    margin=".2em 0 0"
                    width="5em" />
                </Text>
            </FlexContainer>
        </Button>)}
    </FlexContainer>
</Container>

export default Products