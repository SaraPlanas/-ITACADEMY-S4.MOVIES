function printDirectors() {
    console.log(movies)
    let directors = getAllDirectors(movies);
    document.getElementById("directors").innerHTML = "<h1>test</h1>"
    var mostrarDirectores = movies.map(function(movie) {
        return '<il>' + movie.director + '</il>';
    }).join('')
}

function getAllDirectors(movies) {
    var mostrarDirectores = movies.map(function(movie) {
        return movie.director
    })
    console.log(mostrarDirectores)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector( /*array, director*/ ) {
    const result = movies.filter(movie => movie.director === "Steven Spielberg");
    console.log(result);
    return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector( /*array, director*/ ) {
    console.log("Listado de peliculas segun director:")
    const result = getMoviesFromDirector();
    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    console.log("Puntuacion total:" + mostrarPuntuacion.score)
    console.log("Total peliculas:" + result.length)
    var media = (mostrarPuntuacion.score / result.length);
    console.log("Total media:" + media)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically( /*array */ ) {
    movies.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
    const n = 20;
    let pelisOrdenadas = movies.slice(0, n)
    console.log("Listado de las 20 primeras peliculas ordenadas alfabeticametne:")
    console.log(pelisOrdenadas)

}

// Exercise 5: Order by year, ascending
function orderByYear() {
    let ordenado = movies.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    console.log("Listado de peliculas ordenadas alfabeticametne y por año:")
    console.log(ordenado)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

    let result = movies.filter((movie) =>
        movie.genre.includes("Adventure")
    );
    console.log("Listado de peliculas con el genero 'Adventure':")

    console.log(result)

    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    console.log("Puntuacion total:" + mostrarPuntuacion.score)
    console.log("Total peliculas:" + result.length)
    var media = (mostrarPuntuacion.score / result.length);
    console.log("Total media:" + media)
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
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

    console.log(peliculasNuevaDuracion);

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {


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