import { ChapterView } from '../view';
import './words.scss';

export abstract class WordsView {
  public static getWordsImage(page: number): string {
    return `
      <div class="app-words">
        <div class="container">
          <div class="app-words__wrapper">
            <nav class="app-words__nav">
              <ul class="app-words__menu">
                ${ChapterView.getChapterImage('Раздел 1')}
                ${ChapterView.getChapterImage('Раздел 2')}
                ${ChapterView.getChapterImage('Раздел 3')}
                ${ChapterView.getChapterImage('Раздел 4')}
                ${ChapterView.getChapterImage('Раздел 5')}
                ${ChapterView.getChapterImage('Раздел 6')}
              </ul>
            </nav>
            <div class="app-words__items"></div>
            <div class="app-words__pagination">
              <button class="app-words__prev">Prev</button>
              <button class="app-words__number">${page}</button>
              <button class="app-words__next">Next</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
