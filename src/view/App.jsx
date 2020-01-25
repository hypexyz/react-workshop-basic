import React from 'react'

import './App.css'

import Header from '../components/Header'
import Main from './Main'
import Footer from '../components/Footer'

const App = () => (
    <>
        <Header appName={'DevClub App'} isResponsive={false} />
        <Main />
        <Footer />
    </>
)

export default App
