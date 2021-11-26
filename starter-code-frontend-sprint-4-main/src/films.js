// Exercise 1: 
function getAllDirectors(array) {
    return array.map(movie => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    return array.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
    const result = getMoviesFromDirector(array, director);
    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    var media = Number((mostrarPuntuacion.score / result.length).toFixed(2));
    return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    let peliculasOrdenadas = [...array].sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
    const n = 20;
    let pelisOrdenadas = peliculasOrdenadas.slice(0, n)
    return pelisOrdenadas.map(pelicula => pelicula.title)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    let ordenado = [...array].sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    return ordenado
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
    let result = array.filter((movie) =>
        movie.genre.includes(category)
    );
    var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
        return {
            score: acumulador.score + siguienteValor.score
        };
    }, { score: 0 });
    let numberOfMoviesWithScore = result.filter(movie => movie.score).length
    var media = (mostrarPuntuacion.score / numberOfMoviesWithScore);
    return media;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
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
    const peliculasNuevaDuracion = array.map(movie => ({
        ...movie,
        duration: convertToMinutes(movie.duration)
    }));
    return peliculasNuevaDuracion
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {
    const result = array.filter(movie => movie.year);
    result.sort(function(a, b) {
        if (a.score > b.score) {
            return 1;
        }
        if (a.score < b.score) {
            return -1;
        }
        return 0;
    });
    mejorPeliculaAno = result.slice(result.length - 1)
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