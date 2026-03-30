import React, { useState } from 'react'

// lists and keys 
// list =>  display multiple items from data 
// how to create lsit 


// key => index of the item  

const List = () => {
    // const fruits = ["apple"  , "mango" , "grapes" ];

    // const product = [
    //     {id: 1 , name: "shoes" , price: 1000},
    //      {id: 2, name: "watch" , price: 2000},
    // ]

    // const filtered = product.filter((item) => item.price>1500);

    const [products , setProducts] = useState([
         {id: 1 , name: "shoes" , price: 1000},
          {id: 2, name: "watch" , price: 2000},
           {id: 3 , name: "shirt" , price: 1400},
         {id: 4, name: "jeans" , price: 2200},
    ])
    
    function addProduct()  {
        const newItem = {id : 5 , name :"laptop" , price: 50000};
    

    setProducts ([...products , newItem]);
    }
  return (
    
      <div>
        {/* {fruits.map((item , index) => (
            <h1 key={index}>{item}</h1>
        ))} */}
       
{/* 
        {product.map((item) => (
        <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
        </div>
       ))}  */}

       {/* <h1>filtered item </h1>
       {filtered.map((item) => (
        <h1 key={item.id}>{item.name} </h1>
       ))} */}


       {/* conditional inside list  */}


       {/* {product.map((item) => (
        item.price < 500 ?( <h1 key={item.id}>{item.name}= {item.price}</h1> ) : "no product "
       ))} */}




      {/* spread operator = ...  */}
{/*       
      <div >
        <h1>Product List</h1>
        <button onClick={addProduct}>
            Add Product
        </button>

        <div>
            {products.map((item) => (
              <h2 key={item.id}> {item.name} = {item.price}</h2>
            ))}
        </div>
      </div> */}


      
      


     
       




        



      


















      </div>

    
  );
};

export default List
