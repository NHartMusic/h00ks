import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themeContext'

class AlbumList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div className='album-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>When I Get Home</li>
                    <li style={{ background: theme.ui }}>Phrenology</li>
                    <li style={{ background: theme.ui }}>OK Computer</li>
                </ul>
            </div>
        )
    }
}

export default AlbumList