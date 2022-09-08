import { IWord } from '../models';
import { WordsRepository } from './words.repository';

// words service
export class WordsService {
  private wordsRepository: WordsRepository;

  constructor(wordsRepository: WordsRepository) {
    this.wordsRepository = wordsRepository;
  }

  // returns array of words
  public getWords(page: number, group: number): Promise<Array<IWord>> {
    return this.wordsRepository.getWords(page, group);
  }

  public getWord(id: number): Promise<IWord> {
    return this.wordsRepository.getWord(id);
  }
}
