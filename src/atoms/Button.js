// Dev's modules
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Button = styled.button.attrs(props => ({
    align_items: props.align_items || 'center',
    background_color: props.background_color || 'inherit',
    border: props.border || 0,
    border_left: props.border_left || props.border || 0,
    border_radius: props.border_radius || 0,
    hover_animation: props.hover_animation || false,
    flex_direction: props.flex_direction || 'row',
    height: props.height,
    justify_content: props.justify_content || 'center',
    margin: props.margin || 0,
    padding: props.padding || 0,
    width: props.width,
}))`
    font-size: 1em;
    display: flex;
    flex-direction: ${props => props.flex_direction};
    justify-content: ${props => props.justify_content};
    align-items: ${props => props.align_items};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border-radius: ${props => props.border_radius};
    border: ${props => props.border};
    border-left: ${props => props.border_left};
    outline: none;
    background-color: ${props => props.background_color};
    cursor: pointer;
    
    ${props => props.hover_animation && css`
        transition: box-shadow .3s;
        :hover {
            box-shadow: 0 .3em 1em .3em var(--silver);
        }
    `}
`

Button.propTypes = {
    align_items: PropTypes.oneOf([
        'stretch', 
        'flex-start', 
        'center', 
        'flex-end',
        'baseline'
    ]),
    border_left: PropTypes.string,
    border_radius: PropTypes.string,
    hover_animation: PropTypes.bool,
    background_color: PropTypes.string,
    children: PropTypes.node.isRequired,
    flex_direction: PropTypes.oneOf([
        'column',
        'column-reverse',
        'row',
        'row-reverse'
    ]),
    height: PropTypes.string,
    justify_content: PropTypes.oneOf([
        'stretch', 
        'flex-start', 
        'center', 
        'flex-end', 
        'space-around', 
        'space-between', 
        'space-evenly',
        'baseline'
    ]),
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string
}

export default Button