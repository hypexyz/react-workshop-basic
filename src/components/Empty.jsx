import React from 'react'
import PropTypes from 'prop-types'

const Empty = ({ message }) => <h4>{message}</h4>

Empty.propTypes = {
    message: PropTypes.string
}

Empty.defaultProps = {
    message: 'No items'
}

export default Empty
