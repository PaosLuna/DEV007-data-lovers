import data from './data/rickandmorty/rickandmorty.js';

 
//BUSCADOR1
const filtrar1 = (texto1) => {
  const personajes = [];
    for (let personaje of data.results) {
      let nombre = personaje.name.toLowerCase();
        if (nombre.indexOf(texto1) !== -1){
          personajes.push(personaje)
        }      
}
return personajes
}

//BUSCADOR2
const buscadorDos = document.getElementById("buscadorDos");
const espacioPersonajes = document.getElementById("personajes");
const filtrar = () => {
    resultado.innerHTML = '';
    const texto = buscadorDos.value.toLowerCase();
    for (let personaje of data.results) {
        let nombre = personaje.name.toLowerCase();
        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
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
           espacioPersonajes.style.display = 'none'; /*oculta los primeros personajes*/
        }
    }
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
        <li>Personaje no encontrado</li>
        `
    }
}

//FILTRO DE LETRAS
let isalfabeto = (orden, upward) => {
let dataAlfabeto = data.results.slice();
dataAlfabeto.sort((a,b) =>{
const nombreA = a.name.toLowerCase();
const nombreB = b.name.toLowerCase();
if(nombreA<nombreB){
  console.log(dataAlfabeto);
  return -1
}
if(nombreA>nombreB){
  return 1
}
})
return dataAlfabeto
}


//FILTRA POR MULTIVERSOS
function mostrarMultiversos(){
  const multiversos = data.results;
  for (let i=0; i<multiversos.length; i++){
  multiversos[i].origin.name;
  let traerMultiversos = multiversos[i].origin.name;
  //console.log(traerMultiversos);
  }
}
mostrarMultiversos();


//FILTRA PERSONAJES POR MULTIVERSO
function filtrarorigen(data, origen) {
  return data.results.filter(personajes => {
    return personajes.origin.name == origen
  })
}


//FILTRA EPISODIOS POR PERSONAJE
const episodiosTotal = data.results.map(function(personaje){
  return {imagen:personaje.image, nombre:personaje.name, apariciones:personaje.episode.length, episodio:personaje.episode}
});




export {filtrar1, filtrar, isalfabeto, mostrarMultiversos, filtrarorigen, episodiosTotal};




