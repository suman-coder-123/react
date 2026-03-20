import React from 'react'
import { useState } from 'react';

const Header = () => {
      const [count , setCount] = useState(0);
  
  return (
    <div>
      {/* <h1>this is a header </h1> */}
       <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count-1 )}>decrease</button>
    </div>
  )
}

export default Header
