import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Second from './pages/Second'
import UseState from './State/useState'
import List from './List/List'
import AddCard from './List/AddCard'
import FormHandling from './Form/FormHandling'
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
         <Route path='/card' element={<AddCard />} />
         <Route path='/form' element={<FormHandling />}/>
      </Routes>
    </>
  )
}

export default App
