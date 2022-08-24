import { IWord, WordsService } from '../../core';
import { Word } from '../word';
import { WordsView } from './words.view';

export class Words {
  private wordsService: WordsService;

  private words: Array<Word> = [];

  private page = 1;

  private group = 0;

  constructor(wordsService: WordsService) {
    this.wordsService = wordsService;
  }

  public async init(): Promise<void> {
    await this.createWords();
    this.renderWords();
    this.renderWord();
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
    const root: HTMLElement | null = document.getElementById('root');
    const template: string = WordsView.getWordsImage();

    if (root) root.innerHTML = template;
  }
}
