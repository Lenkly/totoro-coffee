import { createElement, appendContent } from '../lib/dom';
import './ghibli.scss';

export function movieListings(ghibli) {
  const container = createElement('section', {
    className: 'container'
  });

  ghibli.items.forEach(item => {
    console.log(item);
    const card = createElement('div', {
      className: 'card',
      innerText: item.title
    });
    card.addEventListener('click', () => {
      ghibli.onSearchResultClick(item);
    });
    appendContent(container, card);
    console.log('card: ', card);
  });
  return container;
}
