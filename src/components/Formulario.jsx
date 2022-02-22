import React, { useState } from 'react'
import '../styles/formulario.css';
import {nanoid} from 'nanoid'
const Formulario = () => {

    //creacion de las citas
    const [citas, setcitas] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        numero: '',
        sintomas: ''
    });


    const [error, sertError] = useState(false)

    // funcion que se ejecuta cuando el usuario escribe en los inputs
    const actualizar = (e) => {  // le paso un evento, sirve para guardar la informacion, si usamos e.target.nameme indicara el nombre del campo en el que escribo
        setcitas({
            ...citas, // hago copia de la cita y le añado el valor que estoy escribiendo en el input cada vez que se hace se interactua
            [e.target.name]: e.target.value
        })
    }

    // estraigo los valores

    const { nombre, apellido, fecha, numero, sintomas } = citas; // destrucuuring para evitar el cita.nombre, cita.apellido, etc

    // para cuando se pulsa en enviar

    const enviarCita = (e) => {
        e.preventDefault();  // se usa para detener una acccion en este caso para parar el vento del envio del formulario.
        // captura el evento sutmit del formulario y evita que la pagina se recargue y el envio de los datos al servidor.
        // como no se envia y lo tenemos capturado podemos hacer validaciones u tras cosas que querramos antes de enviarle los datos al servidor. 


        // validar

        if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' ||  numero.trim() === '' || sintomas.trim() === ''){  // el .trim() elimina los espacion anted y despues del string
            sertError(true)
            return; // para que no ejecute nada mas adelante
        } 

        // asignar un ID

        citas.id = nanoid()

        // crear la cita

        // reiniciar el form

        console.log("enviando el formulario")
    }

    return (
        <div>
            <h2>Formulario cita medica</h2>

            { error ? <p>Hay un error datos por favor reviselos</p> : null}
            <form className='formulario' onSubmit={enviarCita}>
                <label htmlFor="name">Nombre </label>
                <input type="text"
                    name='nombre'
                    id='name'
                    value={nombre}  // nos permitira resetear los valores mas adelante
                    placeholder='Ingrese el nombre'
                    required
                    onChange={actualizar} />

                <label htmlFor="lastName">Apellido </label>
                <input type="text"
                    name='apellido'  // sera la clave (key)
                    id='lastName'
                    value={apellido}  // sera el valor (value)
                    placeholder='Ingrese el apellido'
                    required          // para que no me deje enviar a no ser que este campo contenga algo
                    onChange={actualizar} />

                <label htmlFor='date'>Fecha </label>
                <input type="date"
                    name='fecha'
                    id='date'
                    value={fecha}
                    required
                    onChange={actualizar} />

                <label htmlFor="number">Número </label>
                <input type="number"
                    name='numero'
                    id='number'
                    value={numero}
                    placeholder='Número celular'
                    required
                    onChange={actualizar} />

                <label htmlFor="sintomas">Sintomas</label>
                <textarea id="sintomas" cols="30" rows="5"
                    name='sintomas'
                    value={sintomas}
                    required
                    onChange={actualizar}></textarea>

                <button>Agregrar cita</button>
            </form>

        </div>
    )
}

export default Formulario