import newComponent from '../components/base-components/base-components';
import authorsFooter from '../components/constant/authorFooter';
import links from '../components/constant/nav-link';
import AboutPageView from './about/about.view';
import AuthPageView from './auth/auth.view';
import './main.css';
import StartPageView from './start/start.view';
import StatisticPageView from './statistic/statistic.view';
import SwitchGamesPageView from './switch-games/switch-games.view';
import VocabularyPageView from './vocabulary/vocabulary.view';

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
    const startView = new StartPageView();
    const switchGamesPageView = new SwitchGamesPageView();
    const aboutPageView = new AboutPageView();
    const vocabularyPageView = new VocabularyPageView();
    const statisticPageView = new StatisticPageView();
    const authPageView = new AuthPageView();
    const buttonNextPage = newComponent('div', 'Словарь', ['next-page']);
    buttonNextPage.id = 'showScroll';
    this.main.appendChild(startView.render());
    this.main.appendChild(vocabularyPageView.render());
    this.main.appendChild(switchGamesPageView.render());
    this.main.appendChild(statisticPageView.render());
    this.main.appendChild(aboutPageView.render());
    this.main.appendChild(authPageView.render());
    this.main.appendChild(buttonNextPage);
  }

  renderFooter() {
    this.footer.innerHTML = authorsFooter;
  }
}
