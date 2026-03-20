import React from 'react'
import { useState } from 'react'

// states => data that can change over time inside a component 

// useState => UI can update automatically 

// syntax => const [variable , setvariable] = useState(startvalue);

// variable => current value 
// setvariable => function  to update 
// useState() => react hook 
// startvalue => starting   value 


function  counter()  {
    const [count , setCount] = useState(0);
  return (
    <>
    <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  )
}

export default useState
