import React from 'react'
import PropTypes from 'prop-types'

import Show from 'models/Show'

import Card from 'components/Card'

const ShowCard = ({ show }) => {
    // console.log('show :', show)
    const { image, title, descriptionHtml } = show
    return <Card image={image} title={title} description={descriptionHtml} />
}

ShowCard.propTypes = {
    show: PropTypes.objectOf(PropTypes.instanceOf(Show))
}

export default ShowCard
