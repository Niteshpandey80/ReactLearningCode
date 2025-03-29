import React from 'react'
import { createContext } from 'react'

export const noteContext = createContext();

const NoteContext = (props) => {
    const state =  {
        "name":"nitesh",
        "age":5,
    }
  return (
   
      <noteContext.Provider value={state}>
        {props.children}
      </noteContext.Provider>
    
  )
}

export default NoteContext
