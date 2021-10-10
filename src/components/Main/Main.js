import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Skills from '../Skills/Skills'
import SelfDevelopment from '../SelfDevelopment/SelfDevelopment'
import Contact from '../Contact/Contact'
// import StickySocialMedia from '../StickySocialMedia/StickySocialMedia'

function Main({shouldDisplay}) {

    const [scrollUp, setScrollUp] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setScrollUp(true)
        }, 1000)
    }, [shouldDisplay])

    return ( 
        <section className={`main ${shouldDisplay ? "" : "hidden"} ${scrollUp ? "move-up" : ""}`}>
            {/* <StickySocialMedia /> */}
            <Navbar />
            <About />
            <Skills />
            <SelfDevelopment />
            <Contact />
        </section>
    )
}

export default Main;