import React, { useState } from 'react'

const AddCard = () => {

    const [card , setCard] = useState(0);

    const product = [
         {id: 1 , name: "shoes" , price: 1000},
          {id: 2, name: "watch" , price: 2000},
           {id: 3 , name: "shirt" , price: 1400},
         {id: 4, name: "jeans" , price: 2200},
    ];

    function addToCard() {
        setCard(card + 1);
    }

      function RemoveToCard() {
        setCard(card - 1);
    }

  return (
    <div>
      <h1> Card : {card}</h1>
      <div className='flex'>
        {product.map((item) => (
            <div  key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={addToCard}>Add to Card </button>
                <button onClick={RemoveToCard}>Remove from card </button>
                </div>
        ))}
      </div>


    </div>
  )
}

export default AddCard
