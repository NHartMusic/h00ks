import React, { useContext } from 'react'
import { AlbumContext } from '../contexts/AlbumContext'
import AlbumDetails from './AlbumDetails'

const AlbumList = () => {
    const { albums } = useContext(AlbumContext)
    return albums.length ? (
        <div className='album-list'>
            <ul>
                {albums.map(album => {
                    return (<AlbumDetails album={album}></AlbumDetails>)
                })}
            </ul>
        </div>
    ) : (
            <div className='empty'>No more albums to listen to</div>
        )
}

export default AlbumList