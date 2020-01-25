import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../components/Card'

const ShowCard = ({ show }) => {
    const { name, image, rating } = show
    return <Card image={image} title={name} description={rating} />
}

ShowCard.propTypes = {
    show: PropTypes.object.isRequired
}

export default ShowCard
