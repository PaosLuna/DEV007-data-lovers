import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results);
import {filtrar1, filtrar, isalfabeto, mostrarMultiversos, filtrarorigen, episodiosTotal} from './data.js';

//AQUÍ EMPIEZA NUESTRO CÓDIGO
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const seccion4 = document.getElementById("seccion4");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");

//BOTONES HEADER 
const headerInicio = document.getElementById("headerInicio");
const headerPersonajes = document.getElementById("headerPersonajes");
const headerEpisodios = document.getElementById("headerEpisodios");
const headerMultiversos = document.getElementById("headerMultiversos");
//TERMINA BOTONES HEADER 

seccion2.style.display = 'none';
seccion3.style.display = 'none';
seccion4.style.display = 'none';
header2.style.display = 'none';


//INTERACCIÓN BOTONES HEADER 
headerInicio.addEventListener("click", ()=> {
    cerrarSeccion2()
    cerrarSeccion3()
    cerrarSeccion4()
});    
headerPersonajes.addEventListener("click", ()=> {
    cerrarSeccion3()
    cerrarSeccion1()
});    

headerMultiversos.addEventListener("click", ()=> {  
    abrirSeccion3()
});    

headerEpisodios.addEventListener("click", ()=> {
    abrirSeccion4()
    mostrarEpisodios(episodiosTotal)
}); 
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
    seccion4.style.display = 'none';
    header1.style.display = 'flex';
    header2.style.display = 'none'; 
}

function abrirSeccion3(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'none';
    seccion3.style.display = 'block';
    seccion4.style.display = 'none';
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

function abrirSeccion4(){
    seccion1.style.display = 'none';
    seccion2.style.display = 'none';
    seccion3.style.display = 'none';
    seccion4.style.display = 'block';
    header2.style.display = 'block';
    header1.style.display = 'none';
}

function cerrarSeccion4(){
    seccion2.style.display = 'none';
    seccion1.style.display = 'flex';
    seccion3.style.display = 'none';
    seccion4.style.display = 'none';
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

//BUSCADORES
const buscador1 = document.getElementById("buscador1");
const resultado = document.querySelector('#resultado');
const espacioPersonajes = document.getElementById("personajes");

//DA INTERACCIÓN A LOS BUSCADORES
const botonBuscador = document.getElementById("botonBuscador");/*SECCIÓN2*/
const botonBuscar = document.getElementById("botonBuscar");/*SECCIÓN1*/

botonBuscador.addEventListener("click",() => {
    console.log('BUSCADOR-DOS')
    filtrar()
} )
botonBuscar.addEventListener ("click", event => {
    resultado.innerHTML = '';
    const texto1 = buscador1.value.toLowerCase();
    console.log('FILTRAR-UNO')
    //filtrar1(texto);
    cerrarSeccion1();
    mostrarBuscador(texto1)
})


function mostrarBuscador(texto1){
    let personajes = filtrar1(texto1);
    if (personajes.length > 0) {
        personajes.forEach(personaje => {
            resultado.innerHTML += `
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
            espacioPersonajes.style.display = 'none';
        })
    
        } else{
        resultado.innerHTML += `
        <li>Personaje no encontrado</li>
        `
    }
}



//MOSTRAR TODOS LOS PERSONAJES SIN FILTRO
function mostrarTodo() {
    for (let todos of data.results){
        //console.log(todos);
        espacioPersonajes.innerHTML += `
        <div class="tarjetaP" id="tarjetaP">
        <img class="imagenTarjeta" src="${todos.image}"></img>
        <h4 class="titulotarjetas">${todos.name}</h4>
        <p class="textoTarjeta">
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

//FUNCION DE PRUEBA PARA UNIFICAR
/*function mostrargeneral(){
    for (let todos of data.results){
        //console.log(todos);
        espacioPersonajes.innerHTML += `
        <div class="tarjetaP" id="tarjetaP">
        <img class="imagenTarjeta" src="${todos.image}"></img>
        <p class="textoTarjeta">
        ${todos.name} <br>
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
}*/


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
            <h4 class="titulotarjetas">${todos.name}</h4>
            <p class="textoTarjeta">
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
            <h4 class="titulotarjetas">${todos.name}</h4>
            <p class="textoTarjeta">
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
        <h4 class="titulotarjetas">${personaje.name}</h4>
        <p class="textoTarjeta">
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
  



//ESTE MUESTRA LOS EPISODIOS POR PERSONAJE
function mostrarEpisodios(data) {
    const tarjetasEpisodios = document.getElementById("tarjetasEpisodios");

    data.forEach((personaje) => {
    tarjetasEpisodios.innerHTML += `
    <div class="tarjetaP" id="tarjetaP">
    <img class="imagenTarjeta" src="${personaje.imagen}"></img>
    <h4 class="titulotarjetas">${personaje.nombre}</h4>,
    <p class="textotarjetaepisodios">
    Apariciones en la serie:
    ${personaje.apariciones}
    </p>
    <p class="textoTarjeta"> 
    ${personaje.episodio}</p>
    </div>`
    });
  }


  