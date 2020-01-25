import React, { Component } from 'react'

import ShowsList from './ShowsList'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            shows: []
        }

        // this.onStopLoading = this.onStopLoading.bind(this)
    }

    componentDidMount() {
        this.fetchShows()
    }

    async fetchShows() {
        const response = await fetch('http://api.tvmaze.com/shows')
        const showsData = await response.json()

        const myShows = showsData.map(showObj => ({
            rating: showObj.rating.average,
            desc: showObj.summary,
            name: showObj.name,
            image: showObj.image.original
        }))

        this.setState({
            isLoading: false,
            shows: myShows
        })
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
        return (
            <>
                <h2>Shows</h2>
                <span
                    className="waves-effect waves-light btn"
                    onClick={this.onToggleLoading}>
                    Toggle loading
                </span>
                {this.state.isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <ShowsList shows={this.state.shows} />
                )}
            </>
        )
    }
}

export default HomePage
