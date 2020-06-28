import React from 'react'
import Navbar from './components/navbar'
import AlbumList from './components/albumList'
import ThemeContextProvider from './contexts/themeContext'


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <AlbumList />
      </ThemeContextProvider>
    </div>
  )
}

export default App
