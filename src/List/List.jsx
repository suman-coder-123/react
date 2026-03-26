import React from 'react'

// lists and keys 
// list =>  display multiple items from data 
// how to create lsit 


// key => index of the item  

const List = () => {
    // const fruits = ["apple"  , "mango" , "grapes" ];

    const product = [
        {id: 1 , name: "shoes" , price: 1000},
         {id: 2, name: "watch" , price: 2000},
    ]

    const filtered = product.filter((item) => item.price>1500);
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


       




        



      


















      </div>

    
  );
};

export default List
