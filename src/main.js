import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results);
import {filtrar1, filtrar, isalfabeto, mostrarMultiversos, filtrarorigen} from './data.js';

//AQUÍ EMPIEZA NUESTRO CÓDIGO
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");

//BOTONES HEADER 
const headerInicio = document.getElementById("headerInicio");
const headerPersonajes = document.getElementById("headerPersonajes");
const headerEpisodios = document.getElementById("headerEpisodios");
const headerMultiversos = document.getElementById("headerMultiversos");
//TERMINA BOTONES HEADER 

const espacioPersonajes = document.getElementById("personajes");
seccion2.style.display = 'none';
seccion3.style.display = 'none';
header2.style.display = 'none';


//INTERACCIÓN BOTONES HEADER 
headerInicio.addEventListener("click", ()=> {
    cerrarSeccion2()
    cerrarSeccion3()
});    
headerPersonajes.addEventListener("click", ()=> {
    cerrarSeccion3()
    cerrarSeccion1()
});    

headerMultiversos.addEventListener("click", ()=> {  
    abrirSeccion3()
});    

//headerEpisodios.addEventListener("click", ()=> {
//TERMINA INTERACCIÓN BOTONES HEADER 



function cerrarSeccion1(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'block';
    seccion3.style.display = 'none';
    header2.style.display = 'block';
    header1.style.display = 'none';
}

function cerrarSeccion2(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'flex';
    seccion3.style.display = 'none';
    header1.style.display = 'flex';
    header2.style.display = 'none';
}

function abrirSeccion3(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'none';
    seccion3.style.display = 'block';
    header2.style.display = 'block';
    header1.style.display = 'none';
}

function cerrarSeccion3(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'flex';
    seccion3.style.display = 'none';
    header1.style.display = 'flex';
    header2.style.display = 'none';
}

//CIERRA SECCIÓN 1 Y ABRE LA 2
const botonTodos = document.getElementById("botonTodos");
botonTodos.addEventListener("click", ()=> {
    cerrarSeccion1();
    mostrarTodo();
});

//CIERRA SECCIÓN 1 Y ABRE LA 3
const botonMultiversos = document.getElementById("botonMultiversos");
botonMultiversos.addEventListener("click", ()=> {
    abrirSeccion3();
    mostrarTodo();
    //mostrarFiltrado2();
});



//DA INTERACCIÓN A LOS BUSCADORES
const botonBuscador = document.getElementById("botonBuscador");
botonBuscador.addEventListener("click", filtrar)
const botonBuscar = document.getElementById("botonBuscar");
botonBuscar.addEventListener ("click", event => {
    filtrar1();
    cerrarSeccion1();
})



//MOSTRAR TODOS LOS PERSONAJES SIN FILTRO
function mostrarTodo(){
    for (let todos of data.results){
        //console.log(todos);
        espacioPersonajes.innerHTML += `
        <div class="tarjetaP" id="tarjetaP">
        <img class="imagenTarjeta" src="${todos.image}"></img>
        <p class="textoTarjeta">
        Nombre: ${todos.name} <br>
        Estatus: ${todos.status} <br>
        Especie: ${todos.species} <br>
        Tipo: ${todos.type} <br>
        Genero: ${todos.gender} <br>
        Origen: ${todos.origin.name} <br>
        Locación: ${todos.location.name}
        </p>
        </div>
        `
    }
}


//MOSTRAR FILTRO ABC
function mostrarFiltrado(orden){
    let dataFiltrado = isalfabeto();
    let dataFiltradoReverso = isalfabeto().reverse();
    espacioPersonajes.innerHTML = ""
    if(orden === "descendente"){
        for (let todos of dataFiltradoReverso){
            espacioPersonajes.innerHTML += `
            <div class="tarjetaP" id="tarjetaP">
            <img class="imagenTarjeta" src="${todos.image}"></img>
            <p class="textoTarjeta">
            Nombre: ${todos.name} <br>
            Estatus: ${todos.status} <br>
            Especie: ${todos.species} <br>
            Tipo: ${todos.type} <br>
            Genero: ${todos.gender} <br>
            Origen: ${todos.origin.name} <br>
            Locación: ${todos.location.name}
            </p>
            </div>
            `  
        }
    } else {
        for (let todos of dataFiltrado){
            espacioPersonajes.innerHTML += `
            <div class="tarjetaP" id="tarjetaP">
            <img class="imagenTarjeta" src="${todos.image}"></img>
            <p class="textoTarjeta">
            Nombre: ${todos.name} <br>
            Estatus: ${todos.status} <br>
            Especie: ${todos.species} <br>
            Tipo: ${todos.type} <br>
            Genero: ${todos.gender} <br>
            Origen: ${todos.origin.name} <br>
            Locación: ${todos.location.name}
            </p>
            </div>
            `
        }
    }
}

//SELECTOR POR ALFABETO 
const selectorAbc = document.getElementById("selector1");
selectorAbc.addEventListener("change", function(){
    const seleccionado = selectorAbc.value;
    console.log(selectorAbc.value);
    if(seleccionado === "ascendente"){
        return mostrarFiltrado("ascendente");
    }
    if (seleccionado === "descendente") {
        return mostrarFiltrado("descendente");
    }
});


/*FUNCION PARA EL CARRUSEL INTENTO 2*/
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto ,  i )=> {
    punto[i].addEventListener('click',()=>{
        
        let posicion = i
        let operacion = posicion * -22

        grande.style.transform = `translateX(${ operacion}%)`

        punto.forEach( (cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})



//FILTRA PERSONAJES POR MULTIVERSOS
const tarjetamultiverso = document.querySelectorAll(".tarjetamultiverso");
const personajesmulti = document.getElementById("personajesMulti")
  
  tarjetamultiverso.forEach(element => {
    element.addEventListener('click', function(e){
      let origen1 = e.target.alt;
      personajesmulti.innerHTML = ""
      const personajesFiltrados = filtrarorigen(data, origen1);
      personajesFiltrados.forEach(personaje => {
        personajesmulti.innerHTML += `
        <div class="tarjetaP" id="tarjetaP">
        <img class="imagenTarjeta" src="${personaje.image}"></img>
        <p class="textoTarjeta">
        Nombre: ${personaje.name} <br>
        Estatus: ${personaje.status} <br>
        Especie: ${personaje.species} <br>
        Tipo: ${personaje.type} <br>
        Genero: ${personaje.gender} <br>
        Origen: ${personaje.origin.name} <br>
        Locación: ${personaje.location.name}
        </p>
        </div>
        `
      });
    });
  });
  


/*FUNCION PARA EL CARRUSEL INTENTO 1
const botonSiguiente = document.getElementById("button-next");

botonSiguiente.addEventListener("click", ()=> {
    App();
})

function App() {

window.onload = function(event) {
    let app = new App();
    window.app = app;
}

app.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector("carrusel-track");
    const carrusel = track.querySelectorAll("carrusel");
    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
}

let prevAction = (leftPosition, carruselWidth, track) => {
    if(leftPosition > 0){
        track.style.left = `${-1 * (leftPosition - carruselWidth)} px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) =>{
    if(leftPosition < (trackWidth - listWidth)){
        track.style.left = `${-1 * (leftPosition + carruselWidth)} px`;
    }
}

}*/


