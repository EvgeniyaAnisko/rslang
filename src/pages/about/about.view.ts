import { generateAuthorCard } from '..';
import { authors, newComponent } from '../../components';
import './about.css';

export class AboutPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'about-page';
  }

  render(): HTMLElement {
    const authorsWrapper = newComponent('div', '', ['authors-wrapper']);
    authors.forEach((item) => authorsWrapper.appendChild(generateAuthorCard(item)));
    this.root.appendChild(authorsWrapper);
    return this.root;
  }
}
