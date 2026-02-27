import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';

const App = () => {
  return (
    <>
   <Navbar />
   <h1>this is a main content </h1>
   <Card name="shoes" price="200"/>
   <Card name="watch"  price="300"/>
   
   <Footer />

    </>
  )
}

export default App
