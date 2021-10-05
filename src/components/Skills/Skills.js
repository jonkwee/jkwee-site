import React from 'react'

import skillsIcon from '../../img/skills.svg'
import sideBackgroundImage from '../../img/sidebackground.svg'

function Skills() {
    return (
        <div className="skills">
            <object id="sidebackground" aria-label="background image" 
                data={sideBackgroundImage} width="814" height="291"></object>
                
            <div className="skills_title">
                <object data={skillsIcon} aria-label="Skills icon" 
                    width="23px" height="26px"></object>
                <h1 className="skills_title--text">Skills</h1>
            </div>
            <div className="skills_content">
                <div className="skills_content--timeline">
                    <h2 className="skills_content--timeline-title">Programming Languages</h2>
                    <ul className="skills_content--timeline-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Kotlin</li>
                        <li>Haskell</li>
                        <li>SQL</li>
                        <li>CSS/SCSS</li>
                    </ul>
                </div>

                <div className="skills_content--timeline">
                    <h2 className="skills_content--timeline-title">Tools</h2>
                    <ul className="skills_content--timeline-list">
                        <li>Spring Framework</li>
                        <li>Hibernate</li>
                        <li>Docker</li>
                        <li>Apache Tomcat</li>
                        <li>RabbitMQ</li>
                        <li>AWS</li>
                        <li>Maven</li>
                        <li>ReactJS</li>
                        <li>MongoDB</li>
                        <li>Oracle Database</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills