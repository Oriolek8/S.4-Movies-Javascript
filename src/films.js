const movies = require("./data");


// Exercise 1: Get the array of all directors.
 

function getAllDirectors(array) {
  let nombresDirectores = array.map( pelicula =>  pelicula.director );
     return nombresDirectores;
    }
    
 
    getAllDirectors(movies)
    




// Exercise 2: Get the films of a certain director

  function getMoviesFromDirector(array, director) {
  

    let arrayFromDirector = array.filter( movie => movie.director === director);
    
      return arrayFromDirector;
     }
    
    
  
 
 

 
 // Exercise 3: Calculate the average of the films of a given director.
 let arrayPelicula = [];
 
function moviesAverageOfDirector(array, director) {
  let average;
  

  arrayPelicula = array.filter( pelicula => {
    if(pelicula.director === director){
      return pelicula;
    }
    
    
  });
  
  average = arrayPelicula.reduce((acc, siguienteValor ) => {
    return parseFloat((acc.score + siguienteValor.score) / arrayPelicula.length);
  });


     return  average;
    

  }
  


// Exercise 4:  Alphabetic order by title 


 function orderAlphabetically(array) {
  let arrayMovies = [];
   
  const moviesCopy = array.map(movie => { return { ...movie } });

  arrayMovies = moviesCopy.sort( (a,b) => {
    if(a.title < b.title){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    return 0;


    });
    
    arrayMovies = arrayMovies.map( item => item.title);

    arrayMovies = arrayMovies.filter( (item, index) => {
      if( index <= 19){
        return item;
      }
    });
  
  return arrayMovies;
    }
  


// Exercise 5: Order by year, ascending
let peliculasAños = [];
function orderByYear(array) {
  peliculasAños = array.sort((a,b) => {
    if(a.year < b.year){
      return -1;
    }else if(a.year > b.year){
      return 1;
    }else{
      if(a.title < b.title){
        return -1;
      }else if(a.title > b.title){
        return 1;
      }else{
        return 0;
      }

      } 
    
  });
  nuevoArray = peliculasAños.map( item => item);

  
  return nuevoArray;
  }


// Exercise 6: Calculate the average of the movies in a category



function moviesAverageByCategory(array, tipoGenero) {
  let arrayGenero = [];
  let averageGenero;
  let media;

  arrayGenero = array.filter( pelicula => {
    
    if(pelicula.genre.includes(`${tipoGenero}`) && pelicula.score != null ){
      
        return pelicula;
  
    }
    
  })
  
  averageGenero = arrayGenero.reduce((acc, siguiente) => parseFloat(acc + siguiente.score), 0) ;
  
 

  media = averageGenero  / arrayGenero.length;

  return media;
  }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let soloMinutos = [];
  let minutosTotal;
  const moviesCopy = array.map(movie => { return { ...movie } });

  
  soloMinutos = moviesCopy.map((pelicula) => {
    
  let hora = pelicula.duration.indexOf('h');
  let horaTotal = parseInt(pelicula.duration.substring(0, hora) * 60);
  if(hora <= -1){
    horaTotal = 0;
  }
  
    let minutos = pelicula.duration.indexOf("min");
    minutosTotal = parseInt(pelicula.duration.substring(minutos -2))
  if(minutos <= -1){
    minutosTotal = 0;
  }
  pelicula.duration = horaTotal + minutosTotal;

  return pelicula;

})

return soloMinutos

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, any) {
  let yearBest = [];
  let bestMovie ;
  let numero1;
   yearBest = array.filter(pelicula =>{
     if(pelicula.year === any){

      return pelicula
     }
   });

      bestMovie = yearBest.sort((c1, c2) =>{
        if(c1.score < c2.score){
          return 1;
        }else if(c1.score > c2.score){
          return -1;
        }else{
          return 0;
        }
       
      });  
    
    numero1 = bestMovie.filter( pelicula => pelicula == bestMovie[0])

      
   return numero1;
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
