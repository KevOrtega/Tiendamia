// Dev modules
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

const Text = styled.p.attrs(props => ({
    color: props.color || 'var(--boulder)',
    font_family: props.font_family || 'var(--font-regular)',
    font_size: props.font_size || '1em',
    line_height: props.line_height || "normal",
    line_through: props.line_through || false,
    margin: props.margin || 0,
    text_align: props.text_align || 'left'
}))`
    font-family: ${props => props.font_family};
    font-size: ${props => props.font_size};
    color: ${props => props.color};
    margin: ${props => props.margin};
    text-align: ${props => props.text_align};
    ${props => props.line_through && css`
        text-decoration: line-through;
    `}
    line-height: ${props => props.line_height};
`

Text.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    font_family: PropTypes.oneOf([
        'var(--font-regular)',
        'var(--font-bold)',
        'var(--font-bolder)'
    ]),
    font_size: PropTypes.string,
    line_height: PropTypes.string,
    line_through: PropTypes.bool,
    margin: PropTypes.string,
    text_align: PropTypes.string
}

export default Text