import React from 'react'
import '../styles/formulario.css';
const Formulario = () => {

    //creacion de las citas
    const [citas, setcitas] = useState({
        nombre: "",
        apellido: "",
        fecha: "",
        sintomas: ""
    });

    // funcion que se ejecuta cuando el usuario escribe en los inputs
    const actualizar = () =>{
        console.log("El usuario esta escribiendo")
    }
    return (
        <div>
            <h2>Formulario cita medica</h2>
            <form className='formulario'>
                <label htmlFor="name">Nombre </label>
                <input type="text" 
                id='name' 
                placeholder='Ingrese el nombre'
                onChange={actualizar} />

                <label htmlFor="lastName">Apellido </label>
                <input type="text"
                id='lastName'
                placeholder='Ingrese el apellido'
                onChange={actualizar} />

                <label htmlFor='date'>Fecha </label>
                <input type="date" 
                id='date'
                onChange={actualizar} />

                <label htmlFor="number">Número </label>
                <input type="number"
                id='number'
                placeholder='Número celular' 
                onChange={actualizar}/>

                <label htmlFor="sintomas">Sintomas</label>
                <textarea id="sintomas" cols="30" rows="5"
                onChange={actualizar}></textarea>
                
            </form>

            <button>Agregrar cita</button>
        </div>
    )
}

export default Formulario