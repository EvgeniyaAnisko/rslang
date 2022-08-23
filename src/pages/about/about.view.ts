import newComponent from '../../components/base-components/base-components';
import authors from '../../components/constant/authorInfo';
import './about.css';
import generateAuthorCard from './about.person';

export default class AboutPageView {
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
