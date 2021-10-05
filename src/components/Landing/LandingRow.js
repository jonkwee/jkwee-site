import React from 'react'
import LandingRowContainer from "./LandingRowContainer"

function LandingRow({rowData, startIndex, numberPerRow}) {

    const rowContainers = []
    for (let i = startIndex; i < startIndex + numberPerRow; i++) {
        const rowDataElement = rowData[i]
        rowContainers.push(rowDataElement)
    }

    return (
        <div className="landing_row">
            {rowContainers.map((d, i) => <LandingRowContainer key={i} content={d}/>)}
        </div>
    )
}

export default LandingRow;