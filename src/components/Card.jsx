import React from 'react'
import PropTypes from 'prop-types'

const Card = ({
    image = 'https://materializecss.com/images/sample-1.jpg',
    title = '[Default title]',
    subtitle = '[Default subtitle]',
    children
}) => (
    <div className="card">
        <div className="card-image">
            <img src={image} className="img-responsive" alt="" />
        </div>
        <div className="card-header">
            <div className="card-title h5">{title}</div>
            <div className="card-subtitle text-gray">{subtitle}</div>
        </div>
        <div className="card-body">{children}</div>
    </div>
)

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

// Card.defaultProps = {
//     image: 'https://materializecss.com/images/sample-1.jpg',
//     title: '[Default title]',
//     subtitle: '[Default subtitle]'
// }

export default Card
