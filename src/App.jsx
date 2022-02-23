import './App.css';
import Formulario from './components/Formulario';
import React, { useState } from 'react';
import Cita from './components/Cita';

function App() {
  // almacenar las citas

  const [citas, setCitas] = useState([]);

  // funcion que toma las citas y me le agrega la nueva
  const crearCita = (cita) => {
    setCitas([
      ...citas, cita
    ])
  }

  // funcion para eleiminar las citas ya creadas
  const eliminarCita= (id) =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    setCitas(nuevasCitas);
  }


  return (
    <div className="App">
      <h1>Formulario de citas</h1>

      <Formulario crearCita={crearCita} />

      <h2>Citas realizadas</h2>
      {
        citas.map(cita => {
          return (
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          )
        })
      }
    </div>
  );
}

export default App;
