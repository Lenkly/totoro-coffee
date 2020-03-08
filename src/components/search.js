import { createElement } from '../lib/dom';
import './search.scss';

export function createMovieSearch() {
  const movieSearch = createElement('input', {
    className: 'searchbar',
    type: 'search',
    placeholder: 'Browse Gallery'
  });
  return movieSearch;
}

export function createRandomButton(text) {
  const randomButton = createElement('button', {
    className: 'button',
    innerText: text
  });
  return randomButton;
}
