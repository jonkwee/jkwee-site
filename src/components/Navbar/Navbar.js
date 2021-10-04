import React from "react"

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar_title">Jonathan Kwee</h1>
            <ul className="navbar_list">
                <li className="navbar_list--element"><a href="#about">About</a></li>
                {/* <li className="navbar_list--element"><a href="#">Blog</a></li> */}
                <li className="navbar_list--element"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;