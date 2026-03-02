import React from 'react'

function Card({name , price , rating , image}){
    return (
    <>
    <div className='card'>
        <img src={image} alt={name} className='card-image' />
        <h2 className='name'>{name}</h2>
        <p className='price'>{price}</p>
        <p className='rating'>{rating}</p>
        <button className='btn'>Buy Now </button>
    </div>
    </>
);
}

export default Card
