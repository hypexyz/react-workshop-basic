import React from 'react'

const Footer = props => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">© {currentYear} Copyright DevClub</div>
            </div>
        </footer>
    )
}

export default Footer
