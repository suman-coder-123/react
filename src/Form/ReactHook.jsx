import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHook = () => {

    const {register , handleSubmit , formState:{errors}} = useForm();

    function onSubmit(data) {
        console.log(data);
    }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text"
        placeholder='enter name' 
        {...register("name" , {required : " Name is required" , 
            minLength: {
                value :5,
                message : "Minimum 5 Characters "
            },
            maxLength:{
                value : 10,
                message : "maximum 10 charcater "
            }
        })}/>

        {errors.name && <p> {errors.name.message}</p>}


        <input type="email"
        placeholder='enter email'
        {...register("email" , {required: "email is required"})}
         />
         {errors.email &&<p>{ errors.email.message}</p>}

         <button type='submit'> Submit</button>
      </form>
    </>
  )
}

export default ReactHook
