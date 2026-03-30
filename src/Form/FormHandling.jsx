import React, { useState } from 'react'

// form handling 

// talking user input 

// storing data in a state 

// using it submit , display , api 

// value = {name} => control input 

// onchange = update state 

// preventDefault => page reload stop 


const FormHandling = () => {
 
    // const [name , setName] = useState("");


    const [formData ,  setFormData] = useState({
      name : "" , 
      email: "",
      password : "",
      age : "",
    })

   function handleChange(e) {
    const {value , type } = e.target
   }
    
    function handleSubmit(e) {
      e.preventDefault();
    }
  return (
    <>
    <form  onSubmit={handleSubmit}>
      {/* <h1>enter name : </h1>

      <input type="text"
      value={name}
      placeholder='enter your name'
      onChange={(e) => setName(e.target.value)}
      /> */}


      <input type="text"
      value={formData.name}
      placeholder='enter your name'
      onChange={handleChange} />


      

      <button type="submit"> Submit</button>

      
      </form>
      
    </>
  )
}

export default FormHandling
