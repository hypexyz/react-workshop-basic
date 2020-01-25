import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Header = props => {
    const { pathname } = props.location

    const navStyle = props.isResponsive ? 'hide-on-med-and-down' : ''

    return (
        <header>
            <nav>
                <div className="container nav-wrapper">
                    {/* <a href=""></a> */}
                    <Link to="/" className="brand-logo">
                        {props.appName} <code>{pathname}</code>
                    </Link>
                    <ul id="nav-mobile" className={`right ${navStyle}`}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {props.children}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default withRouter(Header)
