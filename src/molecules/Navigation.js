import ArgFlag from '../assets/arg-flag.png'
import Arrow from "../atoms/Arrow"
import Button from "../atoms/Button"
import { CartIcon } from "../atoms/Icon"
import Image from "../atoms/Image"
import { FlexContainer } from "../atoms/Container"
import Text from "../atoms/Text"

const Navigation = () => <FlexContainer align_items="center" height="100%" justify_content="center" width="30%">
    <Button align_items="center" justify_content="center" margin="0 1.5em 0 0">
        <Image src={ArgFlag} width="1.5em" margin="0 .5em 0 0" />
        <Arrow />
    </Button>
    <Button align_items="center" justify_content="center" margin="0 1.5em 0 0">
        <Text color="var(--white)">Regístrate</Text>
    </Button>
    <Button align_items="center" justify_content="center" margin="0 1.5em 0 0">
        <Text text_align="center" color="var(--white)" margin="0 .5em 0 0">Mi cuenta</Text>
        <Arrow />
    </Button>
    <Button align_items="center" justify_content="center" margin="0 1.5em 0 0">
        <CartIcon size="2em" color="var(--white)" />
    </Button>
</FlexContainer>

export default Navigation