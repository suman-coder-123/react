import React from 'react'
import Card from './Components/Card';
import product from './Data';
import "../src/index.css"

const App = () => {

  return (
 
    <div className='app'>
      <h1 className='heading'> Product List </h1>
      <div className='container'>
        {product.map((pro) => (
          <Card  
          key = {pro.id}
          name = {pro.name}
          price= {pro.price}
          rating= {pro.rating}
          image= {pro.image}
          />
        ))}
      </div>
    </div>

  )
}

export default App
