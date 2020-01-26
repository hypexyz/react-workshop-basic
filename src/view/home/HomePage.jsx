import React, { Component } from 'react'

import { showsService } from 'services/showsService'

import SearchBar from 'components/SearchBar'

import ShowsList from './ShowsList'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            shows: [],
            filteredShows: []
        }

        // this.onStopLoading = this.onStopLoading.bind(this)
    }

    componentDidMount() {
        this.loadShows()
    }

    async loadShows() {
        const shows = await showsService.fetchShows()

        this.setState({
            isLoading: false,
            shows
        })
    }

    handleShowSearch = inputText => {
        this.setState({ inputText })
    }

    onToggleLoading = e => {
        // this.setState({
        //     isLoading: false
        // })

        this.setState(prevState => {
            return {
                isLoading: !prevState.isLoading
            }
        })

        // this.setState({ isLoading: true }, () => {})
    }

    render() {
        const filteredShows = this.state.inputText
            ? this.state.shows.filter(show => {
                  return show.name.toLowerCase().includes(this.state.inputText)
              })
            : this.state.shows

        return (
            <>
                <h2>Shows</h2>
                <span
                    className="waves-effect waves-light btn"
                    onClick={this.onToggleLoading}>
                    Toggle loading
                </span>
                <SearchBar onSearch={this.handleShowSearch} />
                {this.state.isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <ShowsList shows={filteredShows} />
                )}
            </>
        )
    }
}

export default HomePage
