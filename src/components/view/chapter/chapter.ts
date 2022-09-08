import './chapter.scss';

export abstract class ChapterView {
  public static getChapterImage(title: string, group: string): string {
    return `
    <li class="btn app-words__menu-item" data-group=${group}>
      ${title}
    </li>
    `;
  }
}
