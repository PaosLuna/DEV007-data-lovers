import data from './data/rickandmorty/rickandmorty.js';

//BUSCADOR1 BUENO YA FUNCIONA, FAVOR DE NO MOVER NADA
const buscador1 = document.getElementById("buscador1");
const resultado = document.querySelector('#resultado');
const espacioPersonajes = document.getElementById("personajes");
const filtrar1 = () => {
    resultado.innerHTML = '';
    const texto = buscador1.value.toLowerCase();
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

//BUSCADOR2 BUENO YA FUNCIONA, FAVOR DE NO MOVER NADA
const buscadorDos = document.getElementById("buscadorDos");
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
  console.log(traerMultiversos);
  }
}
mostrarMultiversos();



//FILTRA POR MULTIVERSOS POR PERSONAJES
function filtrarorigen(data, c137) {
  return data.results.filter(personajes => {
    return personajes.origin.name == c137
  })
}

/*console.log(filtrarorigen(data,'Earth (C-137)'));*/


//PRUEBA 2 FUNCIONAL DE PERSONAJES POR MULTIVERSO
/*const origen = data.results.filter(result => {result.origin.name.includes('Earth (C-137)')});
console.log(origen);*/

export {filtrar1, filtrar, isalfabeto, mostrarMultiversos, filtrarorigen};




