import React, { createContext, useContext } from 'react'

// usecontext  is a hook 
// without passig props = and avoid prop drilling 

// access global data anywhere in component tree 

// there are 3 states => 1. create context 
// 2. context provider 
// 3. consume data 



const UserContext = createContext();

const UseContext = () => {
   

  return (
    <UserContext.Provider value="suman" >
        < Parent />
    </UserContext.Provider>
  );
}

 function Parent () {
        return <Child />;
    }

    function Child() {
        const user = useContext(UserContext);
        return <h1>User : {user}</h1>
    }

export default UseContext
