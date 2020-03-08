import { createElement, appendContent } from './lib/dom';
//import { filterMovies } from './lib/movielist';
import { createTitle, createIntro } from './components/text';
import { createRandomButton, createMovieSearch } from './components/search';

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

  const search = createMovieSearch();
  search.addEventListener('input', () => {
    const searchValue = event.target.value.toLowerCase();
    console.log('searchValue:', searchValue);
  });

  const btn = createRandomButton('Random Movie, please!');
  btn.addEventListener('click', () => {
    alert('You created a fucking great button!');
  }); //alert setzt voraus, dass eine Funktion ausgeführt wird. Da sie nur hier aufgerufen wird, kann eine Arrow-function genutzt werden. Diese Funktion muss noch gändert werden!

  appendContent(header, title);
  appendContent(main, [intro, search, btn]);

  return [header, main];
}
