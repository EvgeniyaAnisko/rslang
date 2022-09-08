import { pagination } from '..';
import { newAnchorComponent } from '../base-components';
import { titles } from '../constant';

export class PaginationView {
  buttonPrevPage: HTMLAnchorElement;

  buttonNextPage: HTMLAnchorElement;

  constructor() {
    this.buttonNextPage = newAnchorComponent(titles[1].title, titles[1].link, ['next-page']);
    this.buttonPrevPage = newAnchorComponent('', '', ['prev-page']);
    this.buttonPrevPage.style.visibility = 'hidden';
  }

  render(): HTMLElement[] {
    window.addEventListener('scroll', () => {
      pagination();
    });
    pagination();
    return [this.buttonNextPage, this.buttonPrevPage];
  }
}
