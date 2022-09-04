import { createButton } from '../../components';
import { newComponent } from '../../components/base-components/base-components';
import { SprintGamePageView } from '../sprint';
import { audioSVG } from './audio-svg';
import { sprintSVG } from './sprint-svg';
import './switch-games.css';

export class SwitchGamesPageView {
  root: HTMLElement;

  page = 0;

  group = 0;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'switch-games-page';
  }

  render(): HTMLElement {
    const sprintWrapper = newComponent('div', '', ['switch-game-wrapper']);
    const sprintTitle = newComponent('h2', 'Спринт', ['switch-games-page__title']);
    const sprintImage = newComponent('div', sprintSVG('#fff'), ['switch-games-page__image']);
    sprintWrapper.onclick = () => {
      const temp = new SprintGamePageView();
      this.root.appendChild(temp.render(this.page, this.group));
    };

    sprintWrapper.appendChild(sprintTitle);
    sprintWrapper.appendChild(sprintImage);
    this.root.appendChild(sprintWrapper);

    const levelsWrapper = newComponent('div', '', ['switch-game-wrapper', 'levels-wrapper']);
    const levels: Array<HTMLElement> = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      const button = createButton(String(i + 1));
      button.dataset.page = String(i);
      button.dataset.group = String(0);
      levels.push(button);
    }
    levels.forEach((item) => {
      levelsWrapper.appendChild(item);
      item.classList.add('level-btn');
    });

    levelsWrapper.addEventListener('click', (event) => {
      const target = <HTMLElement>event.target;
      if (target.tagName === 'BUTTON') {
        levels.forEach((item) => item.classList.remove('active'));
        target.classList.add('active');
        this.group = Number(target.dataset.group);
        this.page = Number(target.dataset.page);
      }
    });

    this.root.appendChild(levelsWrapper);

    const audioWrapper = newComponent('div', '', ['switch-game-wrapper']);
    const audioTitle = newComponent('h2', 'Аудиовызов', ['switch-games-page__title']);
    const audioImage = newComponent('div', audioSVG('#fff'), ['switch-games-page__image']);

    audioWrapper.appendChild(audioTitle);
    audioWrapper.appendChild(audioImage);
    this.root.appendChild(audioWrapper);

    return this.root;
  }
}
