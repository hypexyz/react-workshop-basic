import React from 'react'
import ShowsList from './ShowsList'

const HomePage = props => {
    const showList = Array(1).fill({
        name: 'GOT',
        image:
            'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg',
        rating: 9.5
    })

    return (
        <>
            <h2>Shows</h2>
            <ShowsList shows={showList} />
        </>
    )
}

export default HomePage
