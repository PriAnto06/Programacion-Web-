let inventario = [];
inventario.push({nombre: "celular",categoria:"Electronica",precio:50000});
inventario.push({nombre: "zapatillas",categoria:"ropa",precio:40000});
inventario.push({nombre: "silla",categoria:"hogar",precio:30000});
inventario.push({nombre: "notebook",categoria:"Electronica",precio:60000});

console.log("Los productos");
inventario.forEach(producto => {
    console.log(producto)
});

let productosElectronica = inventario.filter(producto => producto.nombre);
console.log("nombres de los productos de electronic");
console.log(productosElectronica);
 
let nombresProductos = inventario.map(producto =>producto.nombre);
console.log("nombres de todos los productos");
console.log(nombresProductos);

