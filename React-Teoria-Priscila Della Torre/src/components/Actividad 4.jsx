import React, { useEffect,useState } from 'react';
export function Simular(){
 const [estado, setEstado] = useState('Cargando...');
 
useEffect(()=>{
    setTimeout(()=>{
    setEstado('Listo')
}, 3000);
},[])

return(
    <>
    {
      estado ==='Cargando...'? <p>Cargando...</p>
      : <p>Listo</p>
    }
    
    </>
)
}