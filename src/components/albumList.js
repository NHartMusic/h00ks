import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import { AlbumContext } from '../contexts/albumContext'

const AlbumList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { albums } = useContext(AlbumContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='album-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {albums.map(album => {
                    return (
                        <li key={album.id} style={{ background: theme.ui }}>{album.title}</li>
                    )

                })}

            </ul>
        </div>
    )
}

export default AlbumList

