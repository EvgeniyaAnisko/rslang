export abstract class ChapterView {
  public static getChapterImage(title: string): string {
    return `
    <li class="app-words__menu-item">
      ${title}
    </li>
    `
  }
}