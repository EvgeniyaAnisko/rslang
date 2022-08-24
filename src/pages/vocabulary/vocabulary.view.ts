import { newComponent } from '../../components/base-components/base-components';
import './vocabulary.css';

export class VocabularyPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'vocabulary-page';
  }

  render(): HTMLElement {
    const title = newComponent('h2', 'Словарь');

    this.root.appendChild(title);
    return this.root;
  }
}
