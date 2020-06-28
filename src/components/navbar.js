import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'

class Navbar extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark }
        return (
            <nav>
                <h1>Contextual Fun</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar

