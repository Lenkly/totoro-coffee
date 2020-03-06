import { createElement, appendContent } from './lib/dom';
import { createTitle, createIntro } from './components/text';

export function app() {
  const header = createElement('header', {
    className: 'header'
  });
  const main = createElement('main', {
    className: 'main'
  });
  const title = createTitle('Totoro Coffee');
  const intro = createIntro(
    'Welcome to Totoro Coffee! We serve quality coffee from Java while you can sit back, relax and watch a Ghibli movie of your choice. Just browse through our gallery and choose you favourite.'
  );

  appendContent(header, title);
  appendContent(main, intro);

  return [header, main];
}
