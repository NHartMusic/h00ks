import React from 'react'
import AlbumContextProvider from './contexts/AlbumContext'
import Navbar from './components/Navbar'
import AlbumList from './components/AlbumList'
import NewAlbumForm from './components/AlbumForm'


function App() {
  return (
    <div className="App">
      <AlbumContextProvider>
        <Navbar />
        <AlbumList />
        <NewAlbumForm />
      </AlbumContextProvider>
    </div>
  )
}

export default App
