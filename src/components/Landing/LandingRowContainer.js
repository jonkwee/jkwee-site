import React from 'react'

function LandingRowContainer({content}) {
    return(
        <div className="landing_row--container">
            <span className="landing_row--word gray hidden">{content.rotatedText}</span>
            <span className="landing_row--word dark-gray">{content.initialText}</span>
        </div>
    )
}

export default LandingRowContainer