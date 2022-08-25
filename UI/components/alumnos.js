import React, { useState } from 'react'
import alumno from './alumno';

const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([
        {
            id: 1,
            nombre: "Avellaneda, Ezequiel",
            curso: "6to 2da",
        },
        {
            id: 2,
            nombre: "Rojas, Santiago",
            curso: "5to 3ra",
        },
        {
            id: 3,
            nombre: "Ordenes, Lautaro",
            curso: "6to 3ra",
        },
    ]);



    return (

    <div className='row'>
        {alumnos.map(alumnos = > {
            return()
        })}
    </div>
  )
}

export default Alumnos