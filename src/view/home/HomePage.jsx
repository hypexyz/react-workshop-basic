import React, { Component } from 'react'

import ShowsList from './ShowsList'
import Loading from '../../components/Loading'

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
            image: showObj.image.original,
            genres: showObj.genres
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

        // this.setState({ isLoading: true }, () => { // Do things after isLoading is set})
    }

    render() {
        return (
            <>
                <h1>Shows</h1>
                <div class="divider"></div>
                {this.state.isLoading ? (
                    <Loading />
                ) : (
                    <ShowsList shows={this.state.shows} />
                )}
            </>
        )
    }
}

export default HomePage
