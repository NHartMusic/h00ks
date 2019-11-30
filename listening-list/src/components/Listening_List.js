import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class Listening_List extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return <div className='listen' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}>Mujeres</li>
                <li style={{ background: theme.ui }}>Chocolate and Cheese</li>
                <li style={{ background: theme.ui }}>False Priest</li>
            </ul>
        </div>
    }
}

export default Listening_List