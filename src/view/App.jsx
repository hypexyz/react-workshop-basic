import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from './Main'

const App = () => (
    <>
        <Header appName={'DevClub App'} isResponsive={false} />
        <Main />
        <Footer />
    </>
)

export default App
