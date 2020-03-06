import { createElement } from '../lib/dom';
import 'search.scss';

export function createMovieSearch() {
  const movieSearch = createElement('input', {
    className: 'searchbar',
    type: 'search',
    placeholder: 'Browse Gallery'
  });
  return movieSearch;
}

export function createRandomButton() {
  const randomButton = createElement('click', {
    className: 'button',
    type: 'button'
  });
  return randomButton;
}
