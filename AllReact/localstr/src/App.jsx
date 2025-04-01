import React, { useEffect, useState } from 'react'

const App = () => {

  const [name,setName] = useState(()=>{
    const savedName= localStorage.getItem('Name');
    return savedName ? JSON.parse(savedName):' '
  })
  
  useEffect(()=>{
    localStorage.setItem('name', JSON.stringify(name))
  },[name])
  
  const Clickhandle=()=>{
    setName("");
    localStorage.removeItem("name")
  }

  return (
    <div>
      <h1>Your Name : {name} </h1>
      <input type="text"
       value={name}
        onChange={(e)=>setName(e.target.value)} 
        placeholder='Enter Your Name ' />
      <button onClick={Clickhandle}>Clear Name</button>
    </div>
  )
}

export default App
