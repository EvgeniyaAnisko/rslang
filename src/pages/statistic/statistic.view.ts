import newComponent from '../../components/base-components/base-components';
import './statistic.css';

export default class StatisticPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'statistic-page';
  }

  render(): HTMLElement {
    const title = newComponent('h2', 'Статистика');

    this.root.appendChild(title);
    return this.root;
  }
}
