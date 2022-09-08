/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/lines-between-class-members */
import { ResultPageView } from '..';
import { newComponent, soundSVG } from '../../components';
import { Audiocall } from './audiocall';
import './audiocall.css';

export class AudiocalllGamePageView extends Audiocall {
  root: HTMLElement;
  resultPage: ResultPageView;
  resultPageView: HTMLElement;
  wordImage: HTMLElement;
  wordEnglish: HTMLElement;
  wordTranslate: HTMLElement;

  constructor() {
    super();
    this.root = newComponent('div', '', ['page', 'game-page']);
    this.root.id = 'audiocal-game';

    this.block1 = newComponent('div', '', ['audiocall-block']);
    this.block2 = newComponent('div', '', ['audiocall-block']);
    this.block3 = newComponent('div', '', ['audiocall-block']);
    this.block4 = newComponent('div', '', ['audiocall-block']);
    this.block5 = newComponent('div', '', ['audiocall-block']);

    this.life1 = newComponent('div', '', ['audiocall-block']);
    this.life2 = newComponent('div', '', ['audiocall-block']);
    this.life3 = newComponent('div', '', ['audiocall-block']);
    this.life4 = newComponent('div', '', ['audiocall-block']);
    this.life5 = newComponent('div', '', ['audiocall-block']);

    this.wordImage = newComponent('div', '', ['audiocall-word', 'audiocall-word-image']);
    this.wordEnglish = newComponent('div', '', ['audiocall-word', 'audiocall-word-english']);
    this.wordTranslate = newComponent('div', '', ['audiocall-word', 'audiocall-word-translate']);

    this.resultPage = new ResultPageView();
    this.resultPageView = this.resultPage.render();
  }

  render(page: number, group?: number): HTMLElement {
    this.audiocallWrapper = newComponent('div', '', ['audiocall-game-wrapper']);
    this.audiocallTitle = newComponent('h2', '?', ['audiocall-game__title']);
    this.audiocallQuestionSound = newComponent('div', soundSVG(), ['audiocall-question__sound']);

    const lifeWrapper = newComponent('div', '', ['audiocall-life-wrapper']);
    lifeWrapper.appendChild(this.life1);
    lifeWrapper.appendChild(this.life2);
    lifeWrapper.appendChild(this.life3);
    lifeWrapper.appendChild(this.life4);
    lifeWrapper.appendChild(this.life5);
    this.audiocallWrapper.appendChild(lifeWrapper);

    this.audiocallWrapper.appendChild(this.audiocallQuestionSound);
    this.audiocallWrapper.appendChild(this.audiocallTitle);

    this.blockWrapper = newComponent('div', '', ['audiocall-block-wrapper']);
    this.blockWrapper.appendChild(this.block1);
    this.blockWrapper.appendChild(this.block2);
    this.blockWrapper.appendChild(this.block3);
    this.blockWrapper.appendChild(this.block4);
    this.blockWrapper.appendChild(this.block5);

    this.audiocallWrapper.appendChild(this.blockWrapper);

    this.root.appendChild(this.audiocallWrapper);
    this.resultPageView.style.display = 'none';
    this.root.appendChild(this.resultPageView);

    this.startGame(page, group);
    document.body.style.overflow = 'hidden';
    return this.root;
  }
}
