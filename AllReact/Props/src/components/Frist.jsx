import React from 'react'
import Last from './Last'

const Frist = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <Last lastname={props.lastname}/>
    </div>
  )
}

export default Frist
