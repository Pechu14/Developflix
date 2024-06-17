import peliculas from './peliculas.js'

const filtroAccion = (pelicula) => {
    return pelicula.genre_ids.indexOf(28) !== -1;
}
const peliculasAccion = peliculas.filter(filtroAccion)

const filtroThriller = (pelicula) => {
    return pelicula.genre_ids.indexOf(53) !== -1;
}
const peliculasThriller = peliculas.filter(filtroThriller)

const filtroAventuras = (pelicula) => {
    return pelicula.genre_ids.indexOf(12) !== -1;
}
const peliculasAventuras = peliculas.filter(filtroAventuras)


const accionDiv = document.getElementById("genero-28")
let peliculaAccionDivs = '';
for (let peliculaAccion of peliculasAccion) {
    let  peliculaAccionDiv = '<div> <img width=200px src=https://image.tmdb.org/t/p/w500' + peliculaAccion.backdrop_path + '>  </img> <h3>' + peliculaAccion.title + '</h3></div>';
    peliculaAccionDivs = peliculaAccionDivs + peliculaAccionDiv;
}
accionDiv.innerHTML = peliculaAccionDivs;


const thrillerDiv = document.getElementById("genero-53")
let peliculaThrillerDivs = '';
for (let peliculaThriller of peliculasThriller) {
    let  peliculaThrillerDiv = '<div> <img width=200px src=https://image.tmdb.org/t/p/w500' + peliculaThriller.backdrop_path + '>  </img> <h3>' + peliculaThriller.title + '</h3></div>';
    peliculaThrillerDivs = peliculaThrillerDivs + peliculaThrillerDiv;
}
thrillerDiv.innerHTML = peliculaThrillerDivs;


const aventurasDiv = document.getElementById("genero-12")
let peliculaAventuraDivs = '';
for (let peliculaAventura of peliculasAventuras) {
    let  peliculaAventuraDiv = '<div> <img width=200px src=https://image.tmdb.org/t/p/w500' + peliculaAventura.backdrop_path + '>  </img> <h3>' + peliculaAventura.title + '</h3></div>';
    peliculaAventuraDivs = peliculaAventuraDivs + peliculaAventuraDiv;
}
aventurasDiv.innerHTML = peliculaAventuraDivs;


