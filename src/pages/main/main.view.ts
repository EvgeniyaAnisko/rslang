import newComponent from '../../components/base-coponents/base-components';
import autors from '../../components/constant/author-info';
import links from '../../components/constant/nav-link';
import './main.css';

export default class MainView {
  header: HTMLElement;

  footer: HTMLElement;

  main: HTMLElement;

  constructor() {
    this.header = newComponent('header');
    this.main = newComponent('main');
    this.footer = newComponent('footer');

    document.body.appendChild(this.header);
    document.body.appendChild(this.main);
    document.body.appendChild(this.footer);
  }

  render() {
    this.renderHeader();
    this.renderMain();
    this.renderFooter();
  }

  renderHeader() {
    const nav = newComponent('nav', '', ['nav-list']);
    links.forEach((item) => nav.appendChild(newComponent('ul', item, ['nav-item'])));
    const navWrapper = newComponent('div', '', ['nav-wrapper']);
    navWrapper.appendChild(nav);
    this.header.appendChild(navWrapper);
  }

  renderMain() {
    const mainView = document.createElement('div');
    mainView.id = 'main-page';
    this.main.appendChild(mainView);
  }

  renderFooter() {
    this.footer.innerHTML = autors;
  }
}
