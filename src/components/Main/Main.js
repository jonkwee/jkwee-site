import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Skills from '../Skills/Skills'
import SelfDevelopment from '../SelfDevelopment/SelfDevelopment'
import Contact from '../Contact/Contact'

function Main() {
    return (
        <section className="main hidden" id="scroll-target">
            <Navbar />
            <About />
            <Skills />
            <SelfDevelopment />
            <Contact />
        </section>
    )
}

export default Main;