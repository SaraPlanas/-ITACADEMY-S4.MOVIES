function printDirectors() {
    console.log(movies)
    let directors = getAllDirectors(movies);
    document.getElementById("directors").innerHTML = "<h1>test</h1>"
    var mostrarDirectores = movies.map(function(movie) {
        return '<il>' + movie.director + '</il>';
    }).join('')
}

function getAllDirectors( /*array*/ ) {
    var mostrarDirectores = movies.map(function(movie) {
        return movie.director
    })
    console.log(mostrarDirectores)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector( /*array, director*/ ) {
    const result = movies.filter(movie => movie.director === "Steven Spielberg");
    console.log(result);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector( /*array, director*/ ) {
    const result = movies.filter(movie => movie.director === "Steven Spielberg");
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
    console.log(movies)
    const n = 20;
    let pelisOrdenadas = movies.slice(0, n)
    console.log(pelisOrdenadas)
}

// Exercise 5: Order by year, ascending
function orderByYear() {
    let ordenado = movies.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    console.log(ordenado)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
    const result = movies.filter(movie => movie.genre[''] === "Adventure")
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
        const [, hours, mins] = timeStr.match(/(?:(\d)h )?(\d+)min/)
            .map(v => parseInt(v, 10));
        return hours * 60 + mins;
    }

    const filmsWithNewDurations = movies.map(film => ({
        ...film,
        duration: convertToMinutes(film.duration)
    }));

    console.log(filmsWithNewDurations);

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