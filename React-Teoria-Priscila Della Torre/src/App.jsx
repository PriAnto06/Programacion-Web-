import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Contador } from "./components/Actividad 1";
import { CapturarInput } from "./components/Actividad 2 ";
import { Montar } from "./components/Actividad 3";
import { Simular } from "./components/Actividad 4";
import { Saludo } from "./components/Actividad 5";


function App() {
 const [count, setCount] = useState(0);


 // el estado tiene tres partes
 const [variable, setVariable] = useState("valor inicial");


 const [personajes, setPersonajes] = useState([]);//esta definido pero es un array vacio


 useEffect(() => {
   fetch("https://rickandmortyapi.com/api/character")
     .then((res) => res.json())
     .then((result) => setPersonajes(result.results));
 }, []);


 return (
   <>
   <Contador/>
   <CapturarInput/>
   <Montar/>
   <Simular/>
   <Saludo/>

     {/*!personajes ? (
       <div>cargando...</div>
     ) : (
       <ul>
         {personajes.map((personaje) => (
           <li key={personaje.id}>
             <h3>{personaje.name}</h3>
             <img src={personaje.image} alt="" />
           </li>
         ))}
       </ul>
     )*/}
   </>
 );
}


export default App;
