import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Second from './pages/Second'
import UseState from './State/useState'
import List from './List/List'
const App = () => {
  return (
    <>
      <Routes >
        <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        < Route path='/about' element={<Second />} />
        <Route path='/usestate' element={<UseState />} />
       
        </Route>
         <Route path='/list' element={<List />}/>
      </Routes>
    </>
  )
}

export default App
