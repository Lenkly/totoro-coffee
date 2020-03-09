import { createElement, appendContent } from '../lib/dom';
import './ghibli.scss';

export function movieListings(ghibli) {
  const container = createElement('section', {
    className: 'container'
  });

  ghibli.items.forEach(item => {
    const card = createElement('div', {
      className: 'card',
      innerText: item
    });
    card.addEventListener('click', () => {
      ghibli.onSearchResultClick(item);
    });
    appendContent(container, card);
    console.log('card: ', card);
  });
}
