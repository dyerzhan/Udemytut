'use strict'
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели", '');
const personalMoviesDB = {count : numberOfFilms, 
	movies : {}, 
	actors : {}, 
	genres : [], 
	privat : false
};


for (let i = 0; i < 2; i++){
	const a = prompt("Один из просмотренных фильмов?", "");
	const b = prompt("На сколько вы оцените его?", "");

	if(a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMoviesDB.movies[a] = b;	
		console.log('done');
	} else{
		console.log('error');
		i--;
	}

}

if (personalMoviesDB.count < 10) {
	console.log("Просмотрено мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
	console.log("Вы классический зритель");
} else if (personalMoviesDB >= 30) {
	console.log("Вы киноман");
}
else {
	console.log("Произошла ошибка");
}



console.log(personalMoviesDB)
