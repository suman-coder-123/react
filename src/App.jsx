import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Second from './pages/Second'
import UseState from './State/useState'
import List from './List/List'
import AddCard from './List/AddCard'
import FormHandling from './Form/FormHandling'
import ReactHook from './Form/ReactHook'
import UseEffects from './State/UseEffects'
// import LocalStorage from './Form/LocalStorage'
import UseContext from './State/UseContext'
import CartProvider from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
    <CartProvider>
      <h1 className="text-3xl text-center">Cart App</h1>

      <div className="flex justify-around mt-6">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
      <Routes >
        <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        < Route path='/about' element={<Second />} />
        <Route path='/usestate' element={<UseState />} />
       
        </Route>
         <Route path='/list' element={<List />}/>
         <Route path='/card' element={<AddCard />} />
         <Route path='/form' element={<FormHandling />}/>
         <Route path='/hook' element={<ReactHook/>}/>
         <Route path='/useeffect' element={<UseEffects />} />
         {/* <Route path='local' element={<LocalStorage/>} /> */}
         <Route path='context' element={<UseContext />} />
      </Routes>
    </>
  )
}

export default App
