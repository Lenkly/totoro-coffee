async function ghibliMovies() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');
  const results = await response.json();
  const movies = results;
  const showMovies = movies.map(movie => {
    return movie.title;
  });
  return showMovies;
}

export async function filterMovies(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const everyMovie = await ghibliMovies();
  const filteredMovie = everyMovie.filter(movie => {
    return movie.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredMovie;
}
