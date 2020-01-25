import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = props => {
    const { pathname } = props.location

    return (
        <header class="navbar container bg-secondary">
            <section class="navbar-section"></section>
            <section class="navbar-center">
                <Link to="/">
                    {props.appName} <code>{pathname}</code>
                </Link>
            </section>
            <section class="navbar-section">
                <Link to="/" class="btn btn-link">
                    Home
                </Link>
                <Link to="/about" class="btn btn-link">
                    About
                </Link>
            </section>
        </header>
    )
}

export default withRouter(Header)
