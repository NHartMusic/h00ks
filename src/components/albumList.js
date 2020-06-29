import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

const AlbumList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
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

export default AlbumList

