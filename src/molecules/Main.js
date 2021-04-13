// dev modules
import styled from "styled-components"

// Components
import Button from "../atoms/Button"
import Categories from "./Categories"
import Image from "../atoms/Image"
import Menu from "./Menu"
import Products from "./Products"
import Services from "./Services"

const MainStyled = styled.main`
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    background-color: var(--black-haze);
    min-height: 100vh;
`

const Main = () => <MainStyled>
    <Menu />
    <Button width="100%">
        <Image src="https://images.tiendamia.com/4952312cd080e7ce341b2591cc404fe1.png" />
    </Button>
    <Services />
    <Categories />
    <Products />
</MainStyled>

export default Main