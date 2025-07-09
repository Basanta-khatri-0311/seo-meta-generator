import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-[#1c1c1c] text-gray-900'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
