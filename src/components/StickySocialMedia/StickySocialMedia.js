import githubIcon from '../../img/github.png'
import linkedinIcon from '../../img/linkedin.png'

function StickySocialMedia({shouldDisplay}) {

    return (
        <div className={`sticky_container ${shouldDisplay ? "" : "hidden-side"}`}>
            <p className="sticky_textcontent">Explore More</p>
            <div>
                <a href="https://github.com/jonkwee">
                    <img className="sticky_icon" src={githubIcon} width="22" height="22"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/jonkwee/">
                    <img className="sticky_icon" src={linkedinIcon} width="22" height="22"></img>
                </a>
            </div>
        </div>
    )
}

export default StickySocialMedia