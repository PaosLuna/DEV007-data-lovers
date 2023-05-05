import data from './data/rickandmorty/rickandmorty.js';
// estas funciones son de ejemplo
console.log("hola");

const filtrarNombres = (dataName) => {
  let name = data.results.filter((e) => e.name === dataName);
  console.log(name);
};

export {filtrarNombres};


//BUSCADOR BUENO YA FUNCIONA, FAVOR DE NO MOVER NADA 
const buscadorDos = document.getElementById("buscadorDos");
const resultado = document.querySelector('#resultado');
const espacioPersonajes = document.getElementById("personajes");

const filtrar = () => {
    resultado.innerHTML = '';
    const texto = buscadorDos.value.toLowerCase();
    for (let personaje of data.results) {
        let nombre = personaje.name.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += ` 
            <div class="tarjetaP">${'<img class="imagenTarjeta" src="' + personaje.image + '">' + '<br>' + '<p class="textoTarjeta">' + personaje.name + '<br>' + "Estatus: " + personaje.status + '<br>' + "Especie: " + personaje.species + '<br>' + "Tipo: " + personaje.type + '<br>' + "Genero: " + personaje.gender + '<br>' + "Origen: " + personaje.origin.name + '<br>' + "Locación: " + personaje.location.name + '</p>'}</div>
            ` 
            
            espacioPersonajes.style.display = 'none';
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Personaje no encontrado</li>
        `
    }
}

export {filtrar};







/*/FILTRA POR NOMBRE 
function mostrarNombres(){
  const personajes = data.results;
  console.log(personajes);
  for (let i=0; i<personajes.length; i++){    
  personajes[i].name;
  let traerPersonajes = personajes[i].name;
  }
}*/


