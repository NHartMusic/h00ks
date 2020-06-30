import React, { createContext, useReducer, useEffect } from 'react'
import { albumReducer } from '../reducers/albumReducer'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
    const [albums, dispatch] = useReducer(albumReducer, [], () => {
        const localData = localStorage.getItem('albums')
        return localData ? JSON.parse(localData) : []
    })
    useEffect(() => {
        localStorage.setItem('albums', JSON.stringify(albums))
    }, [albums])
    return (
        <AlbumContext.Provider value={{ albums, dispatch }}>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider