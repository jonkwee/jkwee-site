import React from 'react'
import { Grid } from '@mui/material'

function LandingRowContainer({content}) {
    return(
        <Grid className="landing_row--container" item xs={4} md={3}>
             <span className={`landing_row--word gray ${content.rotate ? "rotate-out" : "hidden"}`}>{content.rotatedText}</span>
             <span className={`landing_row--word dark-gray ${content.rotate ? "rotate-in" : ""}`}>{content.initialText}</span>
        </Grid>
    )
}

export default LandingRowContainer