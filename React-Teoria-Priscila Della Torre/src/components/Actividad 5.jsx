import React, { useState, useEffect } from 'react';

export function Saludo(){
    const[nombre,setNombre] = useState('')
    const[saludo,setSaludo] = useState('')

    const cambiar = (evento) =>{
        setNombre(evento.target.value);
    };
  const  click = () =>{
    setSaludo('hola',nombre) 
  }
  useEffect(() => {
    if (saludo) {
      console.log(' Saludo actualizado');
    }
  }, [saludo]);

  return(
  <>
   <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Escribí tu nombre:</h2>
      <input
        type="text"
        value={nombre}
        onChange={cambiar}
        placeholder="Tu nombre"
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <br />
      <button onClick={click}>Saludar</button>
      <h3>
        {
        nombre==='hola'?<p>hola</p>
        :<p>saludo</p>
        }
      </h3>
    </div>
  </>
  )
}