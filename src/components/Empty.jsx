import React from 'react'
import PropTypes from 'prop-types'

const Empty = ({ title, message, onRetry }) => (
    <div className="empty">
        <div className="empty-icon">
            <i className="icon icon-people"></i>
        </div>
        <p className="empty-title h5">{title}</p>
        <p className="empty-subtitle">{message}</p>
        {onRetry && (
            <div className="empty-action">
                <button className="btn btn-primary" onClick={onRetry}>
                    Retry
                </button>
            </div>
        )}
    </div>
)

Empty.propTypes = {
    message: PropTypes.string
}

Empty.defaultProps = {
    title: 'Nothing here',
    message: 'There is noting to display here'
}

export default Empty
