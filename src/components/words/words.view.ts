import { ChapterView } from '../view';

export abstract class WordsView {
  public static getWordsImage(): string {
    return `
      <div class="app-words">
        <div class="container">
          <div class="app-words__wrapper">
            <div class="app-words__items"></div>
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
          </div>
        </div>
      </div>
    `;
  }
}
