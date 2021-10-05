import React from 'react'

import sideBackgroundImage from '../../img/sidebackground.svg'

function About() {
    return (
        <div className="about" id="about">
            <h1 className="about_title">About</h1>
            <p className="about_content">
                Hi, I am a Software Engineer specialising in developing RESTful services through
                Java using Spring Framework. I’m currently creating great things at
                <a href="https://www.acxiom.com" target="_blank" rel="noopener noreferrer">Acxiom</a>.
            </p>
            <object id="sidebackground" aria-label="background image" 
                data={sideBackgroundImage} width="814" height="291"></object>
        </div>
    )
}

export default About;