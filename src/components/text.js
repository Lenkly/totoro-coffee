import { createElement } from '../lib/dom';
import './text.scss';

export function createTitle(value) {
  const element = createElement('h1', {
    innerText: value,
    className: 'title'
  });
  return element;
}

export function createIntro(value) {
  const intro = createElement('p', {
    innerText: value,
    className: 'intro'
  });
  return intro;
}
