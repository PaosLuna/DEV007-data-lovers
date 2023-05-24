# Data Lovers

## Índice

* [1. Producto](#1-producto)
* [2. Diseño UX](#2-diseño-ux)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Página finalizada](#4-pagina-finalizada)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Producto

El producto es una página web dirigida seguidores de la serie **Rick and Morty**, cuya finalidad es poder mostrar de manera simple y dinámica 
información acerca de los multiples personajes que aparecen a lo largo de las 3 temporadas de la producción.

**Rick and Morty** es una serie de televisión estadounidense de animación para adultos creada por **Justin Roiland** y **Dan Harmon** en 2013 para **Adult Swim**. 
La serie sigue las desventuras del científico **Rick Sanchez**, y su nieto fácilmente influenciable: **Morty**, quienes pasan el tiempo entre viajes espaciales, 
temporales e intergalácticos.

![rick-and-morty](https://github.com/PaosLuna/DEV007-data-lovers/blob/0ce85ba023ced0f8a4e1674fcdb13156bc65eaee/src/imagenes/Readme1.jpeg)

## 2. Diseño UX

### Target

La página está enfocada a los fans de **Rick and Morty**, quienes a través de esta tendrán acceso a información de los personajes de manera ordenada, filtrada por
multiversos, así como conocer en cuántos capítulos aparecen a lo largo de las 3 temporadas. 

### Diseño

El diseño esta basado en los colores **LightGreen**, **DeepSkyBlue** y **Black** , colores distintivos de **Rick and Morty**. Se buscó un diseño minimalista en la 
interfaz ya que los personajes por si solos son demasiado coloridos y extravagantes, así evitamos saturar al usuario. Sin embargo, se agregarón animaciones a las tarjetas
botones para hacer más dinámica la pantalla. 

### Prototipo

Se realizaron dos prototipos, uno de alta fidelidad en Canva:

![prototipo-baja1](https://github.com/PaosLuna/DEV007-data-lovers/blob/0ce85ba023ced0f8a4e1674fcdb13156bc65eaee/src/imagenes/PrototipoBaja1.jpg)

![prototipo-baja2](https://github.com/PaosLuna/DEV007-data-lovers/blob/0ce85ba023ced0f8a4e1674fcdb13156bc65eaee/src/imagenes/PrototipoBaja2.jpg)

Así como nuestro prototipo de alta fidelidad realizado en Figma. 

![prototipo-baja2](https://github.com/PaosLuna/DEV007-data-lovers/blob/34363b096602ebfe77db055d208ed78ec5465a55/src/imagenes/Prototipo3.png)
https://www.figma.com/file/uNO5hvkTJMBtzccoAr8Zto/Untitled?type=design&node-id=0%3A1&t=g4I0TyyN4RYOlItN-1

### Modificaciones basadas en test de usabilidad 

1. Cambios botones: en lugar de hacerse chicos se hacen grandes, color de fondo y de letra
2. Sección personajes: cambio de estructura de las tarjetas 
3. Sección multiversos: en vez de mostrar los multiversos como botones se hizo un carrusel 
4. General: poner botones para cambiar de secciones en el header 

## 3. Historias de usuario 

La página se baso en cuatro historias de usuario, contemplando edades entre 18 y 30 años.

### Historia 1

Julio quiere conocer cuántos personajes tiene en total la serie de Rick and Morty para conocer sus carácteristicas y visualizarlos en orden alfabetico.

### Historia 2

Usuario fan de la serie quiere conocer cuántos tipos de Ricks existen para ver sus carácteristicas.

### Historia 3

Usuario fan de la serie quiere conocer cuántos multiversos aparecen en la serie y conocer qué personajes pertenecen a cada multiverso.

### Historia 4

Usuario creador de contenido quiere saber cuántas veces aparece cada personaje en toda la serie

## 4. Página finalizada

### Sección 1

En la pagína principal se encuentra una sección de bienvenida que le permite al usuario acceder directamente a la lista completa de personajes, al filtrado por multiverso o
buscar directamente al personaje que le interesa en el buscador.

![Sección1](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion1.png)

### Sección 2

La segunda sección muestra la lista completa de personajes sin orden, también se pueden ordenar de la A-Z y visceversa, así como buscar directamente el personaje de su 
interés en el buscador. Si el personaje que se busca no se encuentra, la página arroja el mensaje "Personaje no encontrado".
En la parte posterior se encuentra un header con botones que redirigen a las demás secciones. 

**Data sin filtrar**
![Sección2](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion2.1.png)

**Filtrado por nombre**
![Sección2](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion2.2.png)

**Filtrado A - Z**
![Sección2](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion2.3.png)

**Filtrado Z - A**
![Sección2](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion2.4.png)

**Personaje no encontrado**
![Sección2](https://github.com/PaosLuna/DEV007-data-lovers/blob/ea1e28e2c1840c3b333dd7e0d46ca2bbc85d952d/src/imagenes/seccion2.5.png)

### Sección 3

La tercer sección muestra a través de un carrusel, los diversos multiversoso de la serie. Al seleccionar uno, muestra a los personajes que pertenecen a ese multiverso. 

**Carrusel de multiversos**
![Sección3](https://github.com/PaosLuna/DEV007-data-lovers/blob/f748dbac505f950a0e6d15a36af8c3ba4d0c7406/src/imagenes/Seccion%203.1.png)

**Personajes por multiverso**
![Sección3](https://github.com/PaosLuna/DEV007-data-lovers/blob/f748dbac505f950a0e6d15a36af8c3ba4d0c7406/src/imagenes/Seccion%203.2.png)

### Sección 4

La cuarta y última sección presenta la totalidad de los personajes y la cantidad de veces que han aparecido en la serie. 

![Sección3](https://github.com/PaosLuna/DEV007-data-lovers/blob/e51359efdbac43bb4eed870b7db9967431d0a1e6/src/imagenes/Seccion4.png)

## 5. Test 

Se crearon 13 test para verificar el correcto funcionamiento de la página. 

![Test](https://github.com/PaosLuna/DEV007-data-lovers/blob/d4fc6810c5c96f2ef587a07965ba1f419ccdc5c0/src/imagenes/Test.png)

## 6. Flujo de trabajo

El tiempo para desarrollar este proyecto fue de 4 strings, durante esos strings seguímos el siguiente flujo de trabajo usando Trello para la organización. 

![Flujo de trabajo](https://github.com/PaosLuna/DEV007-data-lovers/blob/d4fc6810c5c96f2ef587a07965ba1f419ccdc5c0/src/imagenes/Trello.png)

## 7. Fuentes consultadas

A continuación algunos de los muchos artículos, videos y páginas consultadas para lograr desarrollar este proyecto:

* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* https://dev.to/duxtech/5-maneras-de-iterar-un-objeto-en-javascript-jkn
* https://www.freecodecamp.org/espanol/news/tutorial-de-javascript-arrayforeach-como-iterar-a-traves-de-elementos-en-un-arreglo/
* https://www.migueltroyano.com/css/crear-un-slide-o-carrusel-en-html-y-css-con-javascript/#Crear_archivo_de_funciones
* https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
* https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
* https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
* https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
* https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
* https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
* https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/
* https://www.freecodecamp.org/espanol/news/tutorial-de-arrayfilter-de-javascript-como-iterar-a-traves-de-los-elementos-en-un-arreglo/
* https://www.freecodecamp.org/espanol/news/javascript-map-como-utilizar-la-funcion-js-map-metodo-de-arreglo/
* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length
* https://fonts.google.com/specimen/Bebas+Neue
* https://midu.dev/foreach-mas-rapido-for/#:~:text=forEach%20es%20un%20m%C3%A9todo%20de,o%20el%20salto%20de%20iteraci%C3%B3n.
* https://medium.com/@angelygranados/c%C3%B3mo-empezar-a-hacer-unit-testing-con-jest-gu%C3%ADa-b%C3%A1sica-ca6d9654672
* https://jestjs.io/docs/api
* https://www.youtube.com/watch?v=k-zv7s_YKWM
* https://www.youtube.com/watch?v=slYiWwmS5GU
* https://www.youtube.com/watch?v=2CEptqw-bSQ&t=620s&ab_channel=EduardoFierro
* https://youtu.be/7sVoukMGJwE


![Gracias](https://github.com/PaosLuna/DEV007-data-lovers/blob/f2744aa0874b8f8f686d97cd67ef73453898125c/src/imagenes/gracias.jpg)



