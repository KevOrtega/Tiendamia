import Button from "../atoms/Button"
import { Container, FlexContainer } from "../atoms/Container"
import Text from "../atoms/Text"

const Categories = () => <FlexContainer margin="2em 0" overflow="hidden auto" width="80%">
    <Button flex_direction="column" margin="0 2em 0 0">
        <Container background_color="var(--rose)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Laptops</Text>
    </Button>
    <Button flex_direction="column" margin="0 2em">
        <Container background_color="var(--cyan)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Tablets</Text>
    </Button>
    <Button flex_direction="column" margin="0 2em">
        <Container background_color="var(--azure-radiance)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Libros</Text>
    </Button>
    <Button flex_direction="column" margin="0 2em">
        <Container background_color="var(--turbo)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Auriculares</Text>
    </Button>
    <Button flex_direction="column" margin="0 2em">
        <Container background_color="var(--malachite)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Termos</Text>
    </Button>
    <Button flex_direction="column" margin="0 2em">
        <Container background_color="var(--coral-red)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Relojes</Text>
    </Button>
    <Button flex_direction="column" margin="0 0 0 2em">
        <Container background_color="var(--azure-radiance)" border_radius="50%" height="10em" width="10em"></Container>
        <Text margin="1em 0 0">Perfumes</Text>
    </Button>
</FlexContainer>

export default Categories