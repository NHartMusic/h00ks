import React, { useContext } from 'react'
import { AlbumContext } from '../contexts/AlbumContext'

const Navbar = () => {
    const { albums } = useContext(AlbumContext)
    return (
        <div className='navbar'>
            <h1>NH Listening List</h1>
            <p>Currently you have {albums.length} albums to listen to</p>
        </div>
    )
}

export default Navbar