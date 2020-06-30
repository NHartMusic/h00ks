import React, { useContext } from 'react'
import { AlbumContext } from '../contexts/AlbumContext'

const AlbumDetails = ({ album }) => {
    const { dispatch } = useContext(AlbumContext)
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_ALBUM', id: album.id })}>
            <div className='title'>{album.title}</div>
            <div className='artist'>{album.artist}</div>
        </li>
    )
}

export default AlbumDetails