import React, { useEffect } from 'react';
export function Montar()
{
    useEffect(() => {
        console.log('El componente se montó');
      }, []);
return (
 <div style={{ textAlign: 'center', marginTop: '2rem' }}>
 <h2>Componente montado</h2>
 <p>Mira la consola</p>
</div>
 );
}