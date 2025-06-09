//Actividad 1

const contraseña = "hola";
const usuario = "Pri";

async function addLogin() {
  const inputUsuario = document.getElementById("usuario").value;
  const inputContraseña = document.getElementById("contraseña").value;
  console.log(inputContraseña, inputUsuario);

  if (inputUsuario === usuario && inputContraseña === contraseña) {
    localStorage.setItem("sesion", true);
    const Usuarioss = await obtenerUsuarios();
    console.log(Usuarioss);
  }
}
async function obtenerUsuarios() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}
