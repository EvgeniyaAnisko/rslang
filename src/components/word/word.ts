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

  public updateWord(word: IWord): Word {
    this.word = word;
    this.render(word);
    return this;
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
      this.addEventListeners();
    }
  }

  private addEventListeners(): void {
    const container: HTMLElement | null = document.getElementById(`${this.word.id}`);
    const audio = <HTMLAudioElement>document.querySelector('.app-word__audio');
    const audioMeaning = <HTMLAudioElement>document.querySelector('.app-word__audio-meaning');
    const audioExample = <HTMLAudioElement>document.querySelector('.app-word__audio-example');

    container?.addEventListener('click', (event) => {
      const isAudio = (<SVGSVGElement>event.target).classList.contains('app-word__audio-svg');
      console.log(isAudio);

      if (isAudio) {
        audio.play();
        setTimeout(() => {
          audioMeaning.play();
        }, audio.duration * 1000);
        setTimeout(() => {
          audioExample.play();
        }, audio.duration * 1000 + audioMeaning.duration * 1000);
      }
    });
  }
}
