import { createButton, Words } from '../../components';
import { newComponent } from '../../components/base-components/base-components';
import { WordsRepository, WordsService } from '../../core';
import './vocabulary.css';

export class VocabularyPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'vocabulary-page';
  }

  render(): HTMLElement {
    const title = newComponent('h2', 'Словарь');
    const vocabularyWrapper = newComponent('div', '', ['switch-game-wrapper']);
    const vocabularyButton = createButton('Перейти к словарю');

    vocabularyButton.addEventListener('click', () => {
      const temp = new Words(new WordsService(new WordsRepository()));
      temp.init();
    });

    vocabularyWrapper.appendChild(title);
    vocabularyWrapper.appendChild(vocabularyButton);
    this.root.appendChild(vocabularyWrapper);
    return this.root;
  }
}
