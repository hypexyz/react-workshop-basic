import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../components/Card'

const ShowCard = ({ show }) => {
    const { name, image, rating, desc } = show

    const title = `${name} (${rating})`
    return <Card image={image} title={title} description={desc} />
}

ShowCard.propTypes = {
    show: PropTypes.object.isRequired
}

export default ShowCard
