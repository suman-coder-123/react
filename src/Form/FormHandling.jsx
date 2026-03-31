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
      gender :"",
      course : [],
      country :"",
      message : ""
    })

   function handleChange(e) {
    const {value , type , name , checked } = e.target;

    if (type === "checkbox") {
      let updateCourse = [...formData.course];

      if (checked) {
        updateCourse.push(value);
      } else {
        updateCourse = updateCourse.filter((C) => C !== value);
      }

      setFormData ({...formData , course: updateCourse});
    } else {
      setFormData({ ...formData , [name]:value});
    }
   }
    
    function handleSubmit(e) {
      e.preventDefault();
      console.log("form submitted ");
      alert(" form submitted ");
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
      name='name'
      value={formData.name}
      placeholder='enter your name'
      onChange={handleChange} />


      <br /><br />

      <label > Gender : </label>

      <input type="radio" name='gender' value="Male" onChange={handleChange} /> Male 

      <input type="radio" name='gender' value="Female" onChange={handleChange} /> Female 

      <br /><br />

      <label > Course : </label>
      <input type="checkbox" value="react" onChange={handleChange} /> React 
      <input type="checkbox" value="python" onChange={handleChange} /> python 
      <input type="checkbox" value="java" onChange={handleChange} /> java 
      <input type="checkbox" value="javascript" onChange={handleChange} /> javascript 
      <input type="checkbox" value="c++" onChange={handleChange} /> c++

      <br /><br />

      <select name="country" value={formData.country} onChange={handleChange}>
        <option value=""> Select country</option>
        <option value="USA"> USA</option>
        <option value="India"> India</option>
                <option value="Germany"> Germany</option>
        <option value="Europe"> Europe</option>
        </select>

<br /><br />

        <textarea name="message" 
        placeholder='enter message'
         value={formData.message} 
        onChange={handleChange} />

      <button type="submit"> Submit</button>

      
      </form>
      
    </>
  )
}

export default FormHandling
