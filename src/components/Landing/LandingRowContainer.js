import React from 'react'

function LandingRowContainer({content}) {
    return(
        <div className="landing_row--container">
            <span className={`landing_row--word gray ${content.rotate ? "rotate-out" : "hidden"}`}>{content.rotatedText}</span>
            <span className={`landing_row--word dark-gray ${content.rotate ? "rotate-in" : ""}`}>{content.initialText}</span>
        </div>
    )
}

export default LandingRowContainer