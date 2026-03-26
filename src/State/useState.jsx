import React from 'react'
import { use ,  useState } from 'react';

// states => data that can change over time inside a component 

// useState => UI can update automatically 

// syntax => const [variable , setvariable] = useState(startvalue);

// variable => current value 
// setvariable => function  to update 
// useState() => react hook 
// startvalue => starting   value 

const UseState = () => {
  const [ count , setCount] = useState(0);
  const [name , setName] = useState("");


  function handleClick() {
    alert("button clicked ");
  }

  function myName(name) {
    alert(name);
  }

  return (
    <>  
            <button onClick={() => myName("welcome to my website ")}>welcome</button>


      <button onClick={() => setCount(count + 1)}>+</button>
       <h1 >{count}</h1>
       <button onClick={() => setCount(count - 1)}>-</button>


       <input className='bg-gray-200' type="text" value={name} onChange={(e) => setName(e.target.value)}/>

       <h1>{name}</h1>


       <button onClick={handleClick}> click me </button>


       <button onClick={() => myName("thank you ")}> thank you </button>

    </>



  )
}

export default UseState
