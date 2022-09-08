import { ChapterView } from '../view';
import './words.scss';

const chapters = Array(6)
  .fill(1)
  .map((item: number, index: number) => ChapterView.getChapterImage(`Раздел ${index + item}`, String(index)));

export abstract class WordsView {
  public static getWordsImage(page: number): string {
    return `
      <div class="app-words">
        <div class="container">
          <div class="app-words__wrapper">
            <nav class="app-words__nav">
              <ul class="app-words__menu">
              ${chapters.join('')}
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
