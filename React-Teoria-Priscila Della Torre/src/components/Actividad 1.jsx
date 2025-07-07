import React, { useEffect, useState } from 'react'
//export default Contador;

export function Contador()
{
 const [contador,setContador] = useState(0);

 const sumar = () => {
    setContador(contador + 1);
 };

 const restar = () => {
    setContador(contador - 1);
 };

 return(
  <>
   <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={sumar} style={{ marginRight: '1rem' }}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>

  </>    
  );
}

