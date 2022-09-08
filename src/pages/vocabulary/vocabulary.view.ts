import { AudiocalllGamePageView, SprintGamePageView } from '..';
import { createButton, Words } from '../../components';
import { newComponent } from '../../components/base-components/base-components';
import { WordsRepository, WordsService } from '../../core';
import './vocabulary.css';

export class VocabularyPageView {
  root: HTMLElement;

  group = 0;

  page = 0;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'vocabulary-page';
  }

  render(): HTMLElement {
    const vocabularyWrapper = newComponent('div', '', ['vocabulary-switch-game-wrapper']);
    const vocabularyButton = createButton('Слова');

    const sprintButton = createButton('Спринт');
    const audiocallButton = createButton('Аудиовызов');

    sprintButton.onclick = () => {
      const temp = new SprintGamePageView();
      this.updateGroupAndPage();
      this.root.appendChild(temp.render(this.page, this.group));
    };
    audiocallButton.onclick = () => {
      const temp = new AudiocalllGamePageView();
      this.updateGroupAndPage();
      this.root.appendChild(temp.render(this.page, this.group));
    };

    const vocabularyWrapperWords = newComponent('div', '', ['vocabulary-wrapper']);

    vocabularyButton.addEventListener('click', () => {
      const temp = new Words(new WordsService(new WordsRepository()));
      temp.init();
    });

    vocabularyWrapper.appendChild(vocabularyButton);
    vocabularyWrapper.appendChild(audiocallButton);
    vocabularyWrapper.appendChild(sprintButton);
    this.root.appendChild(vocabularyWrapper);
    this.root.appendChild(vocabularyWrapperWords);
    return this.root;
  }

  updateGroupAndPage() {
    this.group = Number((<HTMLElement>document.querySelector('.app-words__menu-item.active')).dataset.group);
    const wordsNumber = document.querySelector('.app-words__number');
    if (wordsNumber) {
      this.page = Number(wordsNumber.innerHTML) + 1;
    }
    console.log(this.group, this.page);
  }
}
