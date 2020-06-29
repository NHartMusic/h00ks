import React, { createContext, useState } from 'react'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
    const [albums, setAlbums] = useState([
        { title: 'When I Get Home', id: 1 },
        { title: 'Things Fall Apart', id: 2 },
        { title: 'Like Water for Chocolate', id: 3 },
        { title: 'Donuts', id: 4 }
    ])
    return (
        <AlbumContext.Provider value={{ albums }}>
            {props.children}
        </AlbumContext.Provider>
    );
}

export default AlbumContextProvider;