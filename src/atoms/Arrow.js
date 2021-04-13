import PropTypes from "prop-types"
import styled from "styled-components"

const Arrow = styled.div.attrs(props => ({
    color: props.color || 'var(--white)',
    rotate: props.rotate || '45deg'
}))`
    padding: .15em;
    border: solid ${props => props.color};
    border-width: 0 .05em .05em 0;
    transform: rotate(${props => props.rotate});
    -webkit-transform: rotate(${props => props.rotate});
`

Arrow.propTypes = {
    color: PropTypes.string,
    rotate: PropTypes.string
}

export default Arrow