import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Second from './pages/Second'

const App = () => {
  return (
    <>
   

      <Routes >
        <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        < Route path='/about' element={<Second />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
