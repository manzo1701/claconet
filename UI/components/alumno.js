import React from 'react'

const alumno = (props) => {
  return (
    <div>
        <h1>{props.id}</h1>
        <h1>{props.nombre}</h1>
        <h1>{props.curso}</h1>
    </div>
  )
}

export default alumno