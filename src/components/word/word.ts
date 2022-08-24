import { IWord } from '../../core';
import { WordView } from './word.view';

export class Word {
  private word: IWord;

  constructor(word: IWord) {
    this.word = word;
  }

  public get id(): string {
    return this.word.id;
  }

  public render(word?: IWord): void {
    const root: HTMLElement | null = document.querySelector('.app-words__items');
    const template: string = WordView.getWordImage(this.word);

    if (word) {
      // Re-render an existing word
      const container = document.getElementById(`${word.id}`);
      if (container) container.innerHTML = template;
    } else {
      // Or create a new one
      root?.insertAdjacentHTML('beforeend', `<div class="app-word" id="${this.word.id}">${template}</div>`);
    }
  }
}
