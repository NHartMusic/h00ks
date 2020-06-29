import React from 'react'
import Navbar from './components/navbar'
import AlbumList from './components/albumList'
import ThemeContextProvider from './contexts/themeContext'
import ThemeToggle from './components/themeToggle'
import AuthContextProvider from './contexts/authContext'
import AlbumContextProvider from './contexts/albumContext'


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <AlbumContextProvider>
            <AlbumList />
          </AlbumContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
