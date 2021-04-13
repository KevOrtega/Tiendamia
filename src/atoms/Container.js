// Dev modules
import PropTypes from "prop-types"
import styled from "styled-components"

export const FlexContainer = styled.div.attrs(props => ({
    align_items: props.align_items || 'stretch',
    background_color: props.background_color || 'inherit',
    border: props.border || 0,
    border_radius: props.border_radius || 0,
    border_right: props.border_right || props.border || 0,
    flex_direction: props.flex_direction || 'row',
    flex_wrap: props.flex_wrap || false,
    height: props.height || 'auto',
    justify_content: props.justify_content || 'stretch',
    margin: props.margin || 0,
    min_height: props.min_height || 0,
    min_width: props.min_width || 0,
    padding: props.padding || 0,
    overflow: props.overflow || 'auto',
    width: props.width || 'auto'
}))`
    font-size: 1em;
    display: flex;
    flex-direction: ${props => props.flex_direction};
    justify-content: ${props => props.justify_content};
    align-items: ${props => props.align_items};
    align-content: ${props => props.align_items};
    flex-wrap: ${props => props.flex_wrap ? 'wrap' : 'nowrap'};
    min-width: ${props => props.min_width};
    width: ${props => props.width};
    min-height: ${props => props.min_height};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-right: ${props => props.border_right};
    border-radius: ${props => props.border_radius};
    background-color: ${props => props.background_color};
    overflow: ${props => props.overflow};
`

FlexContainer.propTypes = {
    align_items: PropTypes.oneOf([
        'stretch', 
        'flex-start', 
        'center', 
        'flex-end',
        'baseline'
    ]),
    background_color: PropTypes.string,
    border: PropTypes.string,
    border_radius: PropTypes.string,
    border_right: PropTypes.string,
    flex_direction: PropTypes.oneOf([
        'column',
        'column-reverse',
        'row',
        'row-reverse'
    ]),
    flex_wrap: PropTypes.bool,
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
    min_height: PropTypes.string,
    min_width: PropTypes.string,
    padding: PropTypes.string,
    overflow: PropTypes.string,
    width: PropTypes.string
}

export const Container = styled.div.attrs(props => ({
    background_color: props.background_color || 'transparent',
    border: props.border || 0,
    border_right: props.border_right || props.border || 0,
    border_radius: props.border_radius || 0,
    clip_path: props.clip_path || 'none',
    height: props.height || 'auto',
    margin: props.margin || 0,
    padding: props.padding || 0,
    width: props.width || 'auto'
}))`
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
    border-right: ${props => props.border_right};
    border-radius: ${props => props.border_radius};
    background: ${props => props.background_color};
    clip-path: ${props => props.clip_path};
`

Container.propTypes = {
    background_color: PropTypes.string,
    border: PropTypes.string,
    border_right: PropTypes.string,
    border_radius: PropTypes.string,
    clip_path: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    width: PropTypes.string
}