import React, { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
    const [albums, setAlbums] = useState([
        { title: 'The Low End Theory', artist: 'A Tribe Called Quest', id: 1 },
        { title: 'Ill Communication', artist: 'The Beastie Boys', id: 2 }
    ])
    const addAlbum = (title, artist) => {
        setAlbums([...albums, { title, artist, id: v4() }])
    }
    const removeAlbum = (id) => {
        setAlbums(albums.filter(album => album.id !== id))
    }
    return (
        <AlbumContext.Provider value={{ albums, addAlbum, removeAlbum }}>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider