/* eslint-disable @typescript-eslint/comma-dangle */
import { newComponent } from '../../components';
import './statistic.css';
import { Button } from '../../components/statistics';

export class StatisticPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'statistic-page';
    this.root.insertAdjacentHTML(
      'beforeend',
      `<div class="statistic-wrapper">
                <div class="statistic-text">Log in to get your results</div>
                <div>${Button.getButtonImage()}</div>
              </div>`
    );
  }

  render(): HTMLElement {
    return this.root;
  }
}
