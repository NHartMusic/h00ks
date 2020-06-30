import React, { createContext, useReducer } from 'react'
import { albumReducer } from '../reducers/albumReducer'

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {
    const [albums, dispatch] = useReducer(albumReducer, [])
    return (
        <AlbumContext.Provider value={{ albums, dispatch }}>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider