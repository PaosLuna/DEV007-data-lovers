import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results);
import {filtrar} from './data.js';



//AQUÍ EMPIEZA NUESTRO CÓDIGO
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
const espacioPersonajes = document.getElementById("personajes");
seccion2.style.display = 'none';

//CIERRA SECCIÓN 1 Y ABRE LA 2
const botonTodos = document.getElementById("botonTodos");
botonTodos.addEventListener("click", ()=> {
    cerrarSeccion1();
    mostrarTodo();
});

function cerrarSeccion1(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'block'; 
}

//CIERRA SECCIÓN 2 Y ABRE LA 1
const botonInicio = document.getElementById("botonInicio");
botonInicio.addEventListener("click", ()=> {
    cerrarSeccion2();
});

function cerrarSeccion2(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'block'; 
}

//MOSTRAR TODOS LO PERSONAJES SIN FILTRO 
function mostrarTodo(){
    for (let todos of data.results){
        console.log(todos);
        espacioPersonajes.innerHTML += '<div class="tarjetaP" id="tarjetaP">' + '<img class="imagenTarjeta" src="' + todos.image + '">' + '<br>' + '<p class="textoTarjeta">' + "Nombre: " + todos.name + '<br>'  + "Estatus: " + todos.status + '<br>' + "Especie: " + todos.species + '<br>' + "Tipo: " + todos.type + '<br>' + "Genero: " + todos.gender + '<br>' + "Origen: " + todos.origin.name + '<br>' + "Locación: " + todos.location.name + '</p>' + '</div>';
    }
}


const botonBuscador = document.getElementById("botonBuscador");
botonBuscador.addEventListener("click", filtrar)






//ESTO ES DEL BUSCADOR INTENTO 1
//let buscadorDos = document.getElementById("buscadorDos");
//let tarjetaP = document.getElementById("tarjetaP");

//buscadorFiltro(buscadorDos, tarjetaP); 
//ESTO ES DEL BUSCADOR INTENTO 1















