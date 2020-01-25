import React from 'react'
import PropTypes from 'prop-types'

import Card from '../../components/Card'

const ShowCard = ({ show }) => {
    const { name, image, rating, genres = [] } = show
    const subtitle = `Year: ${'-'} | Rating: ${rating}`
    return (
        <div class="column col-4 col-xs-12">
            <Card image={image} title={name} subtitle={subtitle}>
                <div class="column">
                    {genres.map(genre => (
                        <span class="chip">{genre}</span>
                    ))}
                </div>
            </Card>
        </div>
    )
}

ShowCard.propTypes = {
    show: PropTypes.object.isRequired
}

export default ShowCard
