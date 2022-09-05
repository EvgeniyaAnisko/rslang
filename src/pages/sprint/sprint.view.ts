/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createButton, newComponent } from '../../components';
import { ResultPageView } from '../result';
import { Sprint } from './sprint';
import './sprint.css';

export class SprintGamePageView extends Sprint {
  root: HTMLElement;

  constructor() {
    super();
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'sprint-game';

    this.temporaryScore = newComponent('div', '0', ['sprint-score']);

    this.timerContainer = newComponent('div', '', ['sprint-word', 'sprint-word-timer']);

    this.block1 = newComponent('div', '+20', ['block']);
    this.block2 = newComponent('div', '+40', ['block']);
    this.block3 = newComponent('div', '+80', ['block']);
    this.block4 = newComponent('div', '+160', ['block']);

    this.wordImage = newComponent('div', '', ['sprint-word', 'sprint-word-image']);
    this.wordEnglish = newComponent('div', '', ['sprint-word', 'sprint-word-english']);
    this.wordTranslate = newComponent('div', '', ['sprint-word', 'sprint-word-translate']);

    this.buttonCorrect = createButton('да  →');
    this.buttonCorrect.dataset.answer = 'true';
    this.buttonIncorrect = createButton('←  нет');
    this.buttonIncorrect.dataset.answer = 'false';

    this.resultPage = new ResultPageView();
    this.resultPageView = this.resultPage.render();
  }

  render(page: number, group?: number): HTMLElement {
    this.sprintWrapper = newComponent('div', '', ['sprint-game-wrapper']);
    const sprintTitle = newComponent('h2', 'Спринт', ['sprint-game__title']);
    const wrapperButtonSwitch = newComponent('div', '', ['sprint-game__button-wrapper']);

    wrapperButtonSwitch.appendChild(this.buttonIncorrect);
    wrapperButtonSwitch.appendChild(this.buttonCorrect);

    this.sprintWrapper.appendChild(sprintTitle);
    const blockWrapper = newComponent('div', '', ['block-wrapper']);
    blockWrapper.appendChild(this.block1);
    blockWrapper.appendChild(this.block2);
    blockWrapper.appendChild(this.block3);
    blockWrapper.appendChild(this.block4);

    this.sprintWrapper.appendChild(blockWrapper);
    this.sprintWrapper.appendChild(this.timerContainer);

    const wrapperAnswerCounter = newComponent('div', '', ['sprint-game__answer-wrapper']);

    this.sprintWrapper.appendChild(this.temporaryScore);
    this.sprintWrapper.appendChild(wrapperAnswerCounter);
    this.sprintWrapper.appendChild(this.wordImage);
    this.sprintWrapper.appendChild(this.wordEnglish);
    this.sprintWrapper.appendChild(this.wordTranslate);
    this.sprintWrapper.appendChild(wrapperButtonSwitch);

    this.root.appendChild(this.sprintWrapper);
    this.resultPageView.style.display = 'none';
    this.root.appendChild(this.resultPageView);

    this.startGame(page, group);
    document.body.style.overflow = 'hidden';
    return this.root;
  }
}
