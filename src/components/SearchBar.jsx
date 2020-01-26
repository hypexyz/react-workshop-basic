import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ onSearch }) => {
    const [inputText, setInputText] = useState('')

    const handleOnChange = event => {
        const { value } = event.target

        setInputText(value)
        onSearch(value)
    }

    return (
        <div className="input-field">
            <input
                id="search"
                type="search"
                value={inputText}
                onChange={handleOnChange}
            />
            <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
        </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

// SearchBar.defaultProps = {
//     onSearch: () => {}
// }

export default SearchBar
