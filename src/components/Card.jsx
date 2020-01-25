import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    image = 'https://materializecss.com/images/sample-1.jpg',
    title = '[Default title]',
    description = '[Default description]'
}) => (
    <div className="col s12 m4">
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" />
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

// Card.defaultProps = {
//     image: 'https://materializecss.com/images/sample-1.jpg',
//     title: '[Default title]',
//     description: '[Default description]'
// }

export default Card
