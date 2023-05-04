import data from './data/rickandmorty/rickandmorty.js';
// estas funciones son de ejemplo

console.log("hola");


const filtrarNombres = (dataName) => {
  let name = data.results.filter((e) => e.name === dataName);
  console.log(name);
};

export {filtrarNombres};




/*/FILTRA POR NOMBRE 
function mostrarNombres(){
  const personajes = data.results;
  console.log(personajes);
  for (let i=0; i<personajes.length; i++){    
  personajes[i].name;
  let traerPersonajes = personajes[i].name;
  }
}*/


