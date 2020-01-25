import React from 'react'
import PropTypes from 'prop-types'

import ShowCard from './ShowCard'
import Empty from '../../components/Empty'

const ShowsList = ({ shows = [] }) => {
    if (!shows.length) {
        return <Empty message="No shows to display" />
    }

    return (
        <div className="columns">
            {shows.map((showObj, index) => {
                return <ShowCard show={showObj} key={index} />
            })}
        </div>
    )
}

ShowsList.propTypes = {
    shows: PropTypes.array.isRequired
}

export default ShowsList
