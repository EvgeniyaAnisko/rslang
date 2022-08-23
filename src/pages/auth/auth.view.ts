import newComponent from '../../components/base-components/base-components';
import './auth.css';

export default class AuthPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'auth-page';
  }

  render(): HTMLElement {
    const title = newComponent('h2', 'Авторизация');

    this.root.appendChild(title);
    return this.root;
  }
}
