import styled from "styled-components"
import PropTypes from 'prop-types'

const Image = styled.img.attrs(props => ({
    border_bottom: props.border_bottom || 0,
    border_radius: props.border_radius || 0,
    margin: props.margin || 0,
    width: props.width || '100%'
}))`
    width: ${props => props.width};
    margin: ${props => props.margin};
    border-radius: ${props => props.border_radius};
    border-bottom: ${props => props.border_bottom};
`

Image.propTypes = {
    border_bottom: PropTypes.string,
    border_radius: PropTypes.string,
    margin: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.string
}

export default Image