import React from 'react'

const AboutPage = props => {
    const { params } = props.match

    return (
        <div>
            <h2>About page {params.pageId && `(${params.pageId})`}</h2>
            <span className="btn" onClick={props.history.goBack}>
                <i class="icon icon-back"></i> Back
            </span>
            <p className="flow-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi provident,
                dicta molestiae voluptas sequi inventore porro numquam natus. Voluptate
                numquam saepe quos expedita culpa in asperiores fuga sit, odio dolores.
            </p>
        </div>
    )
}

export default AboutPage
