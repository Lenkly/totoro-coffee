import { createElement, appendContent } from './lib/dom';
import { createTitle, createIntro } from './components/text';
import { createRandomButton, createMovieSearch } from './components/search';
import { filterMovies } from './lib/movielist';
import { movieListings } from './components/ghibli';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Totoro Coffee');
  const intro = createIntro(
    'Welcome to Totoro Coffee! We serve quality coffee from Java while you can sit back, relax and watch a Ghibli movie of your choice. Just browse through our gallery and choose your favourite – or hit the random button.'
  );
  const searchMovie = createMovieSearch({
    value: sessionStorage.getItem('searchValue')
  });
  //const search = createMovieSearch();
  /*searchMovie.addEventListener('input', () => {
    const searchValue = event.target.value.toLowerCase();
    console.log('searchValue:', searchValue);
    //console.log('searchValue.input', searchValue.input);
  });*/

  const btn = createRandomButton('Random Movie, please!');
  btn.addEventListener('click', () => {
    alert('You created a fucking great button!');
  }); //alert setzt voraus, dass eine Funktion ausgeführt wird. Da sie nur hier aufgerufen wird, kann eine Arrow-function genutzt werden. Diese Funktion muss noch gändert werden!

  let searchResults = null;
  async function searchedMovies() {
    const filteredMovies = await filterMovies(searchMovie.value);
    console.log(filteredMovies);
    searchResults = movieListings({
      items: filteredMovies
    });
    appendContent(main, searchResults);
  }
  searchedMovies();

  appendContent(header, title);
  appendContent(main, [intro, searchMovie, btn]);

  searchMovie.addEventListener('input', event => {
    main.removeChild(searchResults);
    searchedMovies();
    const searchValue = event.target.value.toLowerCase();
    sessionStorage.setItem('searchValue', searchValue);
  });

  return [header, main];
}
