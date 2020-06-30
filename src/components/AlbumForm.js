import React, { useContext, useState } from 'react'
import { AlbumContext } from '../contexts/AlbumContext'

const NewAlbumForm = () => {
    const { dispatch } = useContext(AlbumContext)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_ALBUM', album: {
                title, artist
            }
        })
        setTitle('')
        setArtist('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Album Title' value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <input type='text' placeholder='Artist' value={artist}
                onChange={(e) => setArtist(e.target.value)} required />
            <input type='submit' value='Add Album' />
        </form>
    )
}

export default NewAlbumForm