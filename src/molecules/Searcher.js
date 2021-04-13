// Assets

// Header components
import Button from "../atoms/Button"
import Input from "../atoms/Input"
import Image from "../atoms/Image"
import { FlexContainer } from "../atoms/Container"
import Arrow from "../atoms/Arrow"

const Searcher = () => <FlexContainer 
align_items="center" 
height="100%" 
justify_content="flex-start" 
margin="0 0 0 2em"
width="55%">
    <Button background_color="var(--wild-sand)" 
    border_left="1px solid var(--silver)" 
    border_radius="2px 0 0 2px"
    height="60%"
    justify_content="space-around"
    width="12vh">
        <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/vendors-searchbar/logo-amazon.svg" 
        width="60%" />
        <Arrow color="var(--boulder)" rotate="225deg" />
    </Button>
    <Input width="calc(100% - 18vh)" height="60%" />
    <Button width="6vh" background_color="var(--white)" border_radius="0 2px 2px 0" height="60%">
        <Image src="https://tiendamia.com/skin/frontend/traigo/traigo/images/vendors-searchbar/lupa.svg"
        width="50%" />
    </Button>
</FlexContainer>

export default Searcher