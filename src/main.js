import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);


//AQUÍ EMPIEZA NUESTRO CÓDIGO
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
seccion2.style.display = 'none';

const botonTodos = document.getElementById("botonTodos");
botonTodos.addEventListener("click", ()=> {
    //cerrarSeccion1();
    abrirSeccion2();
});

/*function cerrarSeccion1(){
    seccion1.style.display = 'none';
}*/

function abrirSeccion2(){
    seccion2.style.display = 'block'; 
}