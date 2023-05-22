import data from './data/rickandmorty/rickandmorty.js';


//BUSCADOR1
const filtrar1 = (texto1) => {
  const personajes = [];
  for (let personaje of data.results) {
    let nombre = personaje.name.toLowerCase();
    if (nombre.indexOf(texto1) !== -1) {
      personajes.push(personaje)
    }
  }
  return personajes
}

//BUSCADOR2
const filtrar2 = (texto2) => {
  const personajes = [];
  for (let personaje of data.results) {
    let nombre = personaje.name.toLowerCase();
    if (nombre.indexOf(texto2) !== -1) {
      personajes.push(personaje)
    }
  }
  return personajes
}


//FILTRO DE A-Z
let isalfabeto = (orden, upward) => {
  let dataAlfabeto = data.results.slice();
  dataAlfabeto.sort((a, b) => {
    const nombreA = a.name.toLowerCase();
    const nombreB = b.name.toLowerCase();
    if (nombreA < nombreB) {
      console.log(dataAlfabeto);
      return -1
    }
    if (nombreA > nombreB) {
      return 1
    }
  })
  return dataAlfabeto
}


//FILTRA PERSONAJES POR MULTIVERSO
function filtrarorigen(data, origen) {
  return data.results.filter(personajes => {
    return personajes.origin.name == origen
  })
}


//FILTRA EPISODIOS POR PERSONAJE
const episodiosTotal = data.results.map(function (personaje) {
  return { imagen: personaje.image, nombre: personaje.name, apariciones: personaje.episode.length, episodios: personaje.episode }
});




export { filtrar1, filtrar2, isalfabeto, filtrarorigen, episodiosTotal };




