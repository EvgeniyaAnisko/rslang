/* eslint-disable @typescript-eslint/comma-dangle */
import newComponent from '../../components/base-components/base-components';
import IAuthor from '../../components/constant/IAuthor';

export default function generateAuthorCard(author: IAuthor): HTMLElement {
  const authorWrapper = newComponent('div', '', ['wrapper-author']);
  const authorName = newComponent('h2', author.name, ['author-name']);
  const authorImage = newComponent(
    'div',
    `<img src="./src/assets/photo/${author.github}.svg" alt="${author.github}">`,
    ['author-image']
  );
  const authorRole = newComponent('h3', author.role, ['author-role']);
  const authorGit = newComponent(
    'p',
    `<a class="author-link" href="https://github.com/${author.github}">${author.github}</a>`
  );
  const authorWork = newComponent('div', author.work);
  const authorWrapperInfo = newComponent('div', '', ['author-wrapper-info']);
  authorWrapperInfo.appendChild(authorImage);
  authorWrapperInfo.appendChild(authorName);
  authorWrapperInfo.appendChild(authorRole);
  authorWrapperInfo.appendChild(authorGit);
  authorWrapperInfo.appendChild(authorWork);
  authorWrapper.appendChild(authorImage);
  authorWrapper.appendChild(authorWrapperInfo);
  return authorWrapper;
}
