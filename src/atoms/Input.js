// Dev's modules
import { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const InputStyled = styled.input.attrs(props => ({
    margin: props.margin || 0,
    width: props.width,
    height: props.height
}))`
    font-size: 1em;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: 0 0 0 2%;
    border-radius: 0;
    border: none;
    outline: none;
    background-color: var(--white);
    color: var(--cod-gray);
    box-sizing: border-box;
`

const Input = ({margin, placeholder, value, height, width}) => {
    const [inputValue, setInputValue] = useState(value)

    return <InputStyled onChange={e => setInputValue(e.target.value)} 
    margin={margin}
    placeholder={placeholder} 
    value={inputValue}
    height={height}
    width={width} />
}

Input.defaultProps = {
    placeholder: "Buscar entre mil millones de productos"
}

Input.propTypes = {
    margin: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

export default Input