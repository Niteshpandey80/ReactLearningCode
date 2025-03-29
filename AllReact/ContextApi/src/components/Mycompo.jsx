import React, { useContext } from 'react'
import { noteContext } from '../Context/NoteContext'

const Mycompo = () => {
    const a = useContext(noteContext)
  return (
    <div>
      <h1>Hello Sir {a.name}  , Hello sir {a.age} </h1>
    </div>
  )
}

export default Mycompo
