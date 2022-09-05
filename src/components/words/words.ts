import { IWord, WordsService } from '../../core';
import { Word } from '../word';
import { WordsView } from './words.view';

export class Words {
  private wordsService: WordsService;

  private words: Array<Word> = [];

  private page = 0;

  private group = 0;

  constructor(wordsService: WordsService) {
    this.wordsService = wordsService;
  }

  public async init(): Promise<void> {
    await this.createWords();
    this.renderWords();
    this.renderWord();
    this.addEventListeners();
  }

  private async createWords(): Promise<void> {
    const IWords: Array<IWord> = await this.wordsService.getWords(this.page, this.group);
    const words: Array<Word> = IWords.map((word) => new Word(word));
    this.words = [...words];
  }

  private renderWord(): void {
    this.words.forEach((word) => word.render());
  }

  private renderWords(): void {
    const root: HTMLElement | null = document.getElementById('vocabulary-page');
    const template: string = WordsView.getWordsImage(this.page);

    if (root) root.innerHTML = template;
  }

  private addEventListeners(): void {
    const paginationBtn: HTMLElement | null = document.querySelector('.app-words__pagination');

    if (paginationBtn) {
      paginationBtn.addEventListener('click', this.updatePage.bind(this));
    }
  }

  private updatePage(event: Event): void {
    const isPrev: boolean = (<HTMLButtonElement>event.target).classList.contains('app-words__prev');
    const isNext: boolean = (<HTMLButtonElement>event.target).classList.contains('app-words__next');

    const container: HTMLElement | null = document.querySelector('.app-words__items');

    if (container) container.innerHTML = '';

    if (isNext) {
      this.page += 1;
    } else if (isPrev) {
      this.page -= 1;
    }

    this.createWords();
    setTimeout(() => {
      this.renderWord();
    }, 1000);
    this.renderWords();
    this.addEventListeners();
  }
}
