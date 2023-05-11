import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results);
import {filtrar1, filtrar, isalfabeto, mostrarMultiversos} from './data.js';
//AQUÍ EMPIEZA NUESTRO CÓDIGO
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const espacioPersonajes = document.getElementById("personajes");
const espacioMulti = document.getElementById("personajesMulti");
seccion2.style.display = 'none';
seccion3.style.display = 'none';
header2.style.display = 'none';
//CIERRA SECCIÓN 1 Y ABRE LA 2
const botonTodos = document.getElementById("botonTodos");
botonTodos.addEventListener("click", ()=> {
    cerrarSeccion1();
    mostrarTodo();
});
function cerrarSeccion1(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'block';
    seccion3.style.display = 'none';
    header2.style.display = 'block';
    header1.style.display = 'none';
}
//CIERRA SECCIÓN 2 Y ABRE LA 1
const botonInicio = document.getElementById("botonInicio");
botonInicio.addEventListener("click", ()=> {
    cerrarSeccion2();
});
function cerrarSeccion2(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'flex';
    seccion3.style.display = 'none';
    header1.style.display = 'flex';
    header2.style.display = 'none';
}
//CIERRA SECCIÓN 1 Y ABRE LA 3
const botonMultiversos = document.getElementById("botonMultiversos");
botonMultiversos.addEventListener("click", ()=> {
    abrirSeccion3();
    mostrarTodo();
    mostrarFiltrado2();
});
function abrirSeccion3(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'none';
    seccion3.style.display = 'block';
    header2.style.display = 'block';
    header1.style.display = 'none';
}
//CIERRA SECCIÓN 3 Y ABRE LA 1
const botonInicio2 = document.getElementById("botonInicio2");
botonInicio2.addEventListener("click", ()=> {
    cerrarSeccion3();
});
function cerrarSeccion3(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'flex';
    seccion3.style.display = 'none';
    header1.style.display = 'flex';
    header2.style.display = 'none';
}
//MOSTRAR TODOS LOS PERSONAJES SIN FILTRO
function mostrarTodo(){
    for (let todos of data.results){
        console.log(todos);
        espacioPersonajes.innerHTML += '<div class="tarjetaP" id="tarjetaP">' + '<img class="imagenTarjeta" src="' + todos.image + '">' + '<br>' + '<p class="textoTarjeta">' + "Nombre: " + todos.name + '<br>'  + "Estatus: " + todos.status + '<br>' + "Especie: " + todos.species + '<br>' + "Tipo: " + todos.type + '<br>' + "Genero: " + todos.gender + '<br>' + "Origen: " + todos.origin.name + '<br>' + "Locación: " + todos.location.name + '</p>' + '</div>';
    }
}
//ORDENAR DE A-Z
let orden = "AZ";
let inverso = "ZA";
function mostrarFiltrado(ordenAZ){
    let dataFiltrado = isalfabeto(ordenAZ);
    espacioPersonajes.innerHTML = ""
    for (let todos of dataFiltrado){
        console.log(todos);
        espacioPersonajes.innerHTML += '<div class="tarjetaP" id="tarjetaP">' + '<img class="imagenTarjeta" src="' + todos.image + '">' + '<br>' + '<p class="textoTarjeta">' + "Nombre: " + todos.name + '<br>'  + "Estatus: " + todos.status + '<br>' + "Especie: " + todos.species + '<br>' + "Tipo: " + todos.type + '<br>' + "Genero: " + todos.gender + '<br>' + "Origen: " + todos.origin.name + '<br>' + "Locación: " + todos.location.name + '</p>' + '</div>';
    }
}
//ESTO ES DEL SELECTOR POR ALFABETO INTENTO 1
const selectorAbc = document.getElementById("selector1");
selector1.addEventListener("change", function(){
    const seleccionado = selector1.value;
    if(selectorAbc == "A-Z"){
        const seleccionado = selector1.value;
    return mostrarFiltrado(seleccionado);
    }
    if (selectorAbc == "Z-A") {
        const seleccionado = selector1.value;
    return mostrarFiltrado(seleccionado).reverse();
    }
    /*if (selector1 === "A-Z"){
    const seleccionado = selector1.value;
  mostrarFiltrado(seleccionado);
  } else {
    mostrarFiltrado(inverso);
  }*/
});
/*PARA MOSTRAR MULTIVERSOS
function mostrarFiltrado2(mostrarMultiversos){
    let dataMulti = isMultiversos(mostrarMultiversos);
    for (let todos of dataMulti){
        console.log(todos);
        espacioMulti.innerHTML += '<div class="tarjetaP" id="tarjetaP">' + '<img class="imagenTarjeta" src="' + todos.image + '">' + '<br>' + '<p class="textoTarjeta">' + "Nombre: " + todos.name + '<br>'  + "Estatus: " + todos.status + '<br>' + "Especie: " + todos.species + '<br>' + "Tipo: " + todos.type + '<br>' + "Genero: " + todos.gender + '<br>' + "Origen: " + todos.origin.name + '<br>' + "Locación: " + todos.location.name + '</p>' + '</div>';
    }
}*/
const botonBuscador = document.getElementById("botonBuscador");
botonBuscador.addEventListener("click", filtrar)
const botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener ("click", event => {
    //event.preventDefault;
    filtrar1();
    cerrarSeccion1();
})


//ESTO ES DEL BUSCADOR INTENTO 1
//let buscadorDos = document.getElementById("buscadorDos");
//let tarjetaP = document.getElementById("tarjetaP");
//buscadorFiltro(buscadorDos, tarjetaP);
//ESTO ES DEL BUSCADOR INTENTO 1