import Show from 'models/Show'
import { BASE_URL } from 'shared/constants'

class ShowsService {
    async fetchShows() {
        const showsEndpoint = `${BASE_URL}/shows`

        const response = await fetch(showsEndpoint)
        const showsData = await response.json()

        // console.log('showsData :', showsData)

        const myShows = showsData.map(showObj => new Show(showObj))
        // console.log('myShows :', myShows)

        return myShows
    }
}

export const showsService = new ShowsService()
