export async function ghibliMovies() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  const results = await response.json();
  console.log(results);
  const movies = results;
  const showMovies = movies.map(movie => {
    const movieCard = {
      title: movie.title,
      description: movie.description
    };
    return movieCard;
  });
  return showMovies;
}

export async function filterMovies(searchValue) {
  const lowerCaseSearchValue = searchValue; //.toLowerCase();
  const everyMovie = await ghibliMovies();
  console.log(everyMovie);
  const filteredMovie = everyMovie.filter(movie => {
    return movie.title.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredMovie;
}
