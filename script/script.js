const numberOfFilms = +prompt("Сколько фильмов вы посмотрели", '');
const personalMoviesDB = {count : numberOfFilms, 
	movies : {}, 
	actors : {}, 
	genres : [], 
	privat : false
};
const lastViewFilm = prompt("Один из просмотренных фильмов?", "");
const lastMovieRating = prompt("На сколько вы оцените его?", "");
personalMoviesDB.movies[lastViewFilm] = lastMovieRating;
console.log(personalMoviesDB)
