import newComponent from '../../components/base-components/base-components';
import audioSVG from './audio-svg';
import sprintSVG from './sprint-svg';
import './switch-games.css';

export default class SwitchGamesPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'switch-games-page';
  }

  render(): HTMLElement {
    const sprintWrapper = newComponent('div', '', ['switch-game-wrapper']);
    const sprintTitle = newComponent('h2', 'Спринт', ['switch-games-page__title']);
    const sprintImage = newComponent('div', sprintSVG('#fff'), ['switch-games-page__image']);

    sprintWrapper.appendChild(sprintTitle);
    sprintWrapper.appendChild(sprintImage);
    this.root.appendChild(sprintWrapper);

    const audioWrapper = newComponent('div', '', ['switch-game-wrapper']);
    const audioTitle = newComponent('h2', 'Аудиовызов', ['switch-games-page__title']);
    const audioImage = newComponent('div', audioSVG('#fff'), ['switch-games-page__image']);

    audioWrapper.appendChild(audioTitle);
    audioWrapper.appendChild(audioImage);
    this.root.appendChild(audioWrapper);

    return this.root;
  }
}
