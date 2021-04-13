// Dev's modules
import styled from "styled-components"

// Header components
import { FlexContainer } from "../atoms/Container"
import Heading from "../atoms/Heading"
import Navigation from "./Navigation"
import { TiendamiaIcon } from "../atoms/Icon"
import Searcher from "./Searcher"

const HeaderStyled = styled.header`
    font-size: 1em;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 0;
    background-color: var(--coral-red);
    width: 100%;
    height: 10vh;

    @media (max-width: 768px) {
        font-size: .7em
    }
`

const Header = () => <HeaderStyled>
    <FlexContainer align_items="center" height="100%" justify_content="center" width="70%">
        <Heading>
            <TiendamiaIcon size="5em" />
        </Heading>
        <Searcher />
    </FlexContainer>
    <Navigation />
</HeaderStyled>

export default Header