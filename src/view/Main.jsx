import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import Empty from '../components/Empty'

const Main = props => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about/:pageId?" component={AboutPage} />
            <Route path="*">
                <Empty message="Nista ovde" />
            </Route>
        </Switch>
    </main>
)

export default Main
