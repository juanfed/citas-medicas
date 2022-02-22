import React, {useState} from 'react'
import '../styles/formulario.css';
const Formulario = () => {

    //creacion de las citas
    const [citas, setcitas] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        numero : '',
        sintomas: ''
    });

    // funcion que se ejecuta cuando el usuario escribe en los inputs
    const actualizar = (e) =>{  // le paso un evento, sirve para guardar la informacion, si usamos e.target.nameme indicara el nombre del campo en el que escribo
        setcitas({
            ...citas, // hago copia de la cita y le añado el valor que estoy escribiendo en el input cada vez que se hace se interactua
            [e.target.name] : e.target.value
        })
    }

    // estraigo los valores

    const {nombre, apellido, fecha, numero, sintomas } = citas;

    return (
        <div>
            <h2>Formulario cita medica</h2>
            <form className='formulario'>
                <label htmlFor="name">Nombre </label>
                <input type="text" 
                name='nombre'
                id='name' 
                value={nombre}  // nos permitira resetear los valores mas adelante
                placeholder='Ingrese el nombre'
                onChange={actualizar} />

                <label htmlFor="lastName">Apellido </label>
                <input type="text"
                name='apellido'
                id='lastName'
                value={apellido}
                placeholder='Ingrese el apellido'
                onChange={actualizar} />

                <label htmlFor='date'>Fecha </label>
                <input type="date" 
                name='fecha'
                id='date'
                value={fecha}
                onChange={actualizar} />

                <label htmlFor="number">Número </label>
                <input type="number"
                name='numero'
                id='number'
                value={numero}
                placeholder='Número celular' 
                onChange={actualizar}/>

                <label htmlFor="sintomas">Sintomas</label>
                <textarea id="sintomas" cols="30" rows="5"
                name='sintomas'
                value={sintomas}
                onChange={actualizar}></textarea>
                
            </form>

            <button>Agregrar cita</button>
        </div>
    )
}

export default Formulario