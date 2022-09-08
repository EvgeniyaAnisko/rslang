// eslint-disable-next-line object-curly-newline
import { newComponent, links, PaginationView, authorsFooter } from '../components';
import { AboutPageView } from './about';
import { AuthPageView } from './auth';
import './main.css';
import { StartPageView } from './start';
import { StatisticPageView } from './statistic';
import { SwitchGamesPageView } from './switch-games';
import { VocabularyPageView } from './vocabulary';

export default class MainView {
  header: HTMLElement;

  footer: HTMLElement;

  main: HTMLElement;

  constructor() {
    this.header = newComponent('header');
    this.main = newComponent('main');
    this.footer = newComponent('footer');

    document.getElementById('root')?.appendChild(this.header);
    document.getElementById('root')?.appendChild(this.main);
    document.getElementById('root')?.appendChild(this.footer);
  }

  async render() {
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

    nav.addEventListener('click', (event) => {
      const target = <HTMLElement>event.target;
      if (target.tagName === 'A') {
        const temp = document.getElementById('result-page');
        if (temp) {
          temp.innerHTML = '';
          if (temp.parentElement) {
            temp.parentElement.remove();
          }
          document.body.style.overflow = 'auto';
        }
      }
    });
  }

  renderMain() {
    const startView = new StartPageView();
    const switchGamesPageView = new SwitchGamesPageView();
    const aboutPageView = new AboutPageView();
    const vocabularyPageView = new VocabularyPageView();
    const statisticPageView = new StatisticPageView();
    const authPageView = new AuthPageView();
    const paginationView = new PaginationView();
    this.main.appendChild(startView.render());
    this.main.appendChild(vocabularyPageView.render());
    this.main.appendChild(switchGamesPageView.render());
    this.main.appendChild(statisticPageView.render());
    this.main.appendChild(aboutPageView.render());
    this.main.appendChild(authPageView.render());
    this.main.appendChild(paginationView.render()[0]);
    this.main.appendChild(paginationView.render()[1]);
  }

  renderFooter() {
    this.footer.innerHTML = authorsFooter;
  }
}
