import React from 'react'

const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className='cita'>
            <p>Nombre: {cita.nombre}</p>
            <p>apellido: {cita.apellido}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Numero: {cita.numero}</p>
            <p>Sintomas: {cita.sintomas}</p>

            <button onClick={ () => eliminarCita(cita.id)}>Eliminar cita</button> {/*  no poner dentro del onclick asi: eliminarCita() porque estaria llamaando a la funcion y eso no es lo que quiero */}
        </div>
    )
}

export default Cita