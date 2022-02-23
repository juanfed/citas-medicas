import React from 'react'

const Cita = ({cita}) => {
  return (
    <div className='cita'>
        <p>Nombre: {cita.nombre}</p>
        <p>apellido: {cita.apellido}</p>
        <p>Fecha: {cita.fecha}</p>
        <p>Numero: {cita.numero}</p>
        <p>Sintomas: {cita.sintomas}</p>

        <button>Eliminar cita</button>
    </div>
  )
}

export default Cita