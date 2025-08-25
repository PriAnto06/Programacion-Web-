import React, { useState } from "react";

export default function Operator2() {
  const [numeros, setNumeros] = useState([1,2,3,4,5]);

  const setNum = () => {
    setNumeros([...numeros,6]);
  };

  return (
    <>
      <h2>Spread Operator</h2>
       {numeros.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      <button onClick={setNum}>Agregar número</button>
       
    </>
  );
}
//productos 
export default function Pedidos()
{
 const productos = [{ nombre: "Camiseta", precio: 20 },
                   { nombre: "Pantalón", precio: 30 },];
}

const productosConDescuento = productos.map(producto => ({
  ...producto,descuento: true    
}));
console.log(productosConDescuento);
return()
{
 <>
   <h4>productos con descuento</h4>
    {productosConDescuento.map((productos, index) => (
          <p key={index}>{producto.nombre}</p>
        ))};
 </>
};
