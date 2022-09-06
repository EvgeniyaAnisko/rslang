import './chapter.scss';

export abstract class ChapterView {
  public static getChapterImage(title: string): string {
    return `
    <li class="btn app-words__menu-item">
      ${title}
    </li>
    `;
  }
}
