import React, { useContext } from 'react'
import { AlbumContext } from '../contexts/AlbumContext'

const AlbumDetails = ({ album }) => {
    const { removeAlbum } = useContext(AlbumContext)
    return (
        <li onClick={() => removeAlbum(album.id)}>
            <div className='title'>{album.title}</div>
            <div className='artist'>{album.artist}</div>
        </li>
    )
}

export default AlbumDetails