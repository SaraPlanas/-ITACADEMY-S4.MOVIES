
// Exercise 1: 
function getAllDirectors(array) {
    const movies = require('../src/data');
    var array = movies;
    
    //var mostrarDirectores = array.map(function(movie) {
    //    return movie.director
    //})
    const mostrarDirectores = array.map(movie => movie.director);
    
    return mostrarDirectores;
    //console.log(mostrarDirectores)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector( array, director ) {
    const movies = require('../src/data');
    var array = movies;
var director = ''
    const result = array.filter(movie => movie.director === director);
 // console.log(result);
    
    return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector( array, director ) {
    //console.log("Listado de peliculas segun director:")
    const result = getMoviesFromDirector();
    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    //console.log("Puntuacion total:" + mostrarPuntuacion.score)
    //console.log("Total peliculas:" + result.length)
    var media = parseInt((mostrarPuntuacion.score / result.length).toFixed(2));
    //console.log("Total media:" + media)
    return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically( array ) {
    const movies = require('../src/data');
    var array = movies;
    array.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
    var pelis = array;
    const n = 20;
    let pelisOrdenadas = array.slice(0, n)
    //console.log("Listado de las 20 primeras peliculas ordenadas alfabeticametne:")
    //console.log(pelisOrdenadas)
    
    return pelisOrdenadas
    

}

// Exercise 5: Order by year, ascending
function orderByYear() {
    const movies = require('../src/data');
    
    let ordenado = movies.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
   // console.log("Listado de peliculas ordenadas alfabeticametne y por año:")
    //console.log(ordenado)
    return ordenado
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
    const movies = require('../src/data');
    
    let result = movies.filter((movie) =>
        movie.genre.includes("Adventure")
    );
    //console.log("Listado de peliculas con el genero 'Adventure':")

    //console.log(result)

    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    //console.log("Puntuacion total:" + mostrarPuntuacion.score)
    //console.log("Total peliculas:" + result.length)
    var media = (mostrarPuntuacion.score / result.length);
    //console.log("Total media:" + media)
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
    const movies = require('../src/data');
    const convertToMinutes = (timeStr) => {
        let results = timeStr.match(/(?:(\d)h )?(\d+)min/)
        if (results != null) {
            const [, hours, mins] = results;
            return (Number(hours) * 60) + Number(mins);
        } else {
            const [, hours] = timeStr.match(/(\d)/);
            return (Number(hours) * 60);
        }

    }

    const peliculasNuevaDuracion = movies.map(movie => ({
        ...movie,
        duration: convertToMinutes(movie.duration)
    }));

   // console.log(peliculasNuevaDuracion);
return peliculasNuevaDuracion
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
    const movies = require('../src/data');

    const result = movies.filter(movie => movie.year );
    //console.log(result);
    
    result.sort(function(a, b) {
        if (a.score > b.score) {
            return 1;
        }
        if (a.score < b.score) {
            return -1;
        }
        return 0;
    });    

    mejorPeliculaAno = result.slice(result.length-1)
   //console.log(mejorPeliculaAno);
    return mejorPeliculaAno
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}