import React from 'react'
import Navbar from './components/navbar'
import AlbumList from './components/albumList'
import ThemeContextProvider from './contexts/themeContext'
import ThemeToggle from './components/themeToggle'
import AuthContextProvider from './contexts/authContext'


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <AlbumList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
