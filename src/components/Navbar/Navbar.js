import { ButtonGroup, Button, createTheme } from "@mui/material"
import React from "react"
import NavMenu from "./NavMenu"

const navbarMUITheme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        }
    }
})

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar_title">Jonathan Kwee</h1>
            <NavMenu />
            <ul className="navbar_list">
                <ButtonGroup theme={navbarMUITheme} variant="text" aria-label="text button group" color="primary" >
                    <li className="navbar_list--element"><a href="#about">About</a></li>
                    <li className="navbar_list--element"><a href="#contact">Contact</a></li>
                </ButtonGroup>
            </ul>
        </nav>
    )
}


export default Navbar;