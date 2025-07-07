import React, { useEffect, useState } from 'react'

export function CapturarInput() 
{
 const [texto ,setTexto]=useState('');
 const cambio = (event) => {
    setTexto(event.target.value);
  };

return(
<>

<div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Escribí algo:</h2>
      <input
        type="text"
        value={texto}
        onChange={cambio}
        placeholder="Escribí acá"
      />
      <p>Texto ingresado: {texto}</p>
    </div>
</>
);
}
