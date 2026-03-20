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
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

export default UseState
