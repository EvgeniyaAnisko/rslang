import { createButton, newAnchorComponent, newComponent } from '../../components/base-components';
import './start.css';

export class StartPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'start-page';
  }

  render(): HTMLElement {
    const title = newComponent('h1', 'RS Lang');
    const about = newComponent('h2', 'Начни изучение английского');
    const link = newAnchorComponent('', '#auth-page');
    const button = createButton('Присоединиться');

    this.root.appendChild(title);
    this.root.appendChild(about);
    link.appendChild(button);
    this.root.appendChild(link);
    return this.root;
  }
}
