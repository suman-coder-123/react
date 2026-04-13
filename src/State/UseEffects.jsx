import React, { useEffect, useState } from 'react'


//use effect =  it is hoof performance optimization technique in react it is used to perform side effect in function component

// side UseEffect(outside react component) = it is used to perform side effect in function component

//  API CALL 
// timers
// local storage 
// DOM update 


// syntax of useeffect 

// useEffect (() => {
//     // code function 
// }, [dependency])


// useeffect = hook 
// function = code to run 
// dependency array = when to run  





const UseEffects = () => {


  const [ users , setUser] = useState([]);

  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  //  const [count , setCount ] = useState(0);
  //  const [count1 , setCount1] = useState(0);

  //  useEffect(() => {
  //   console.log("component mounted ");
  //       } , [count]);
  return (
    <div>
       {/* <h1>{count}</h1> */}
       {/* <button onClick={() => setCount(count+1)}> Increase</button> */}


       <h1>User List </h1>
       {users.map((user) => (
        <p key={user.id}>{user.name} </p>
       ))}
    </div>
  )
}

export default UseEffects
