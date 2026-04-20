import axios from 'axios';
import React, { useEffect, useState } from 'react'

// axios  => it is javascript library used to make HTTPS requests (API Call);

// lesser code then fetch 
// auto convert into json 
// but import axios and install in terminal 



function  Axios() {
    const [data , SetData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            SetData(res.data)
        })
        .catch ((err) => {
            console.log("error : " , err);
        });
    } , [])

  return (
    <div>
      <h1>Users</h1>

      {data.map((user) => (
        <p key={user.id}> {user.name}</p>
      ))}
    </div>
  )
}

export default Axios
