import { Container } from './Container'
import PropTypes from 'prop-types'

const Star = ({stars}) => {
    const star_components = []

    for(let i = 0; i < parseInt(stars); i++) {
        star_components.push(<Container background_color="var(--lightning-yellow)"
        clip_path="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        height="1.5em"
        key= {"star" + i}
        width="1.5em" />)
    }

    if(stars === parseInt(stars) + .5) {
        star_components.push(<Container background_color="linear-gradient(to right, var(--lightning-yellow) 50%, var(--silver) 50%)"
        clip_path="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        height="1.5em"
        key="half-star"
        width="1.5em" />)
    }

    return star_components
}

Star.propType = {
    stars: PropTypes.number.isRequired
}

export default Star