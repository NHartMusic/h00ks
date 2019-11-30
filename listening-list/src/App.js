import React from 'react'
import Navbar from './components/Navbar'
import Listening_List from './components/Listening_List'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <div className="App">


      <ThemeContextProvider>
        <Navbar />
        <Listening_List />
      </ThemeContextProvider>

    </div>
  )
}

export default App
