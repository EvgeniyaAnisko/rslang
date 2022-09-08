import { createButton, newComponent, soundSVG } from '../../components';
import { Endpoints, IWord } from '../../core';
import './result.css';

export class ResultPageView {
  root: HTMLElement;

  correctAnswersWrapper: HTMLElement;

  correctAnswersTitle: HTMLElement;

  correctAnswers: HTMLElement;

  wrongAnswersWrapper: HTMLElement;

  wrongAnswersTitle: HTMLElement;

  wrongAnswers: HTMLElement;

  answersWrapper: HTMLElement;

  statisticWrapper: HTMLElement;

  totalScore: HTMLElement;

  statisticPercentage: HTMLElement;

  correctAnswersCounter: HTMLElement;

  wrongAnswersCounter: HTMLElement;

  switchPage: HTMLElement;

  staticticViewButton: HTMLElement;

  fullInfo: HTMLElement;

  rootWrapper: HTMLElement;

  exitButton: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page', 'game-page']);
    this.root.id = 'result-page';

    this.rootWrapper = newComponent('div', '', ['result-page__wrapper']);

    this.statisticWrapper = newComponent('div', '', ['result-statistic__wrapper', 'active']);
    this.answersWrapper = newComponent('div', '', ['result-answers__wrapper']);

    this.totalScore = newComponent('p', '', ['total-score']);
    this.statisticPercentage = newComponent('h3', '', ['total-score__percentage']);
    this.correctAnswersCounter = newComponent('h4', '', ['total-score__correct-answers']);
    this.wrongAnswersCounter = newComponent('h4', '', ['total-score__wrong-answers']);
    this.statisticWrapper.appendChild(this.totalScore);
    this.statisticWrapper.appendChild(this.statisticPercentage);
    this.statisticWrapper.appendChild(this.correctAnswersCounter);
    this.statisticWrapper.appendChild(this.wrongAnswersCounter);

    this.correctAnswersWrapper = newComponent('div', '', ['correct-answers__wrapper']);
    this.correctAnswersTitle = newComponent('h2', '', ['correct-answers__title']);
    this.correctAnswers = newComponent('div', '', ['correct-answers']);
    this.correctAnswersWrapper.appendChild(this.correctAnswersTitle);
    this.correctAnswersWrapper.appendChild(this.correctAnswers);
    this.answersWrapper.appendChild(this.correctAnswersWrapper);

    this.wrongAnswersWrapper = newComponent('div', '', ['wrong-answers__wrapper']);
    this.wrongAnswersTitle = newComponent('h2', '', ['wrong-answers__title']);
    this.wrongAnswers = newComponent('div', '', ['wrong-answers']);
    this.wrongAnswersWrapper.appendChild(this.wrongAnswersTitle);
    this.wrongAnswersWrapper.appendChild(this.wrongAnswers);
    this.answersWrapper.appendChild(this.wrongAnswersWrapper);

    this.switchPage = newComponent('div', '', ['result-switch']);
    this.staticticViewButton = createButton('Статистика');
    this.staticticViewButton.onclick = () => this.switchView('statistic');
    this.fullInfo = createButton('Слова');
    this.fullInfo.onclick = () => this.switchView('answers');
    this.switchPage.appendChild(this.staticticViewButton);
    this.switchPage.appendChild(this.fullInfo);

    this.exitButton = createButton('Главное меню');
    this.exitButton.onclick = () => {
      this.exit();
      window.location.reload();
    };
    this.switchPage.appendChild(this.exitButton);
  }

  render(): HTMLElement {
    this.rootWrapper.appendChild(this.switchPage);
    this.rootWrapper.appendChild(this.statisticWrapper);
    this.rootWrapper.appendChild(this.answersWrapper);
    this.root.appendChild(this.rootWrapper);
    return this.root;
  }

  renderResult(score: number, correctWords: number, wrongWords: number) {
    if (score !== 0) this.totalScore.innerHTML = `Общий счёт: ${score}`;
    else this.totalScore.innerHTML = 'Результат игры';
    this.correctAnswersCounter.innerHTML = `Правильных ответов: ${correctWords}`;
    this.wrongAnswersCounter.innerHTML = `Ошибочных ответов: ${wrongWords}`;
    this.statisticPercentage.innerHTML = `${Math.trunc((correctWords * 100) / (correctWords + wrongWords)) || 0}%`;
  }

  async updateRender(
    correctAnswers: (IWord | undefined)[] | undefined,
    wrongAnswers: IWord[] | null,
    score: number,
    correctWords: number,
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    wrongWords: number
  ) {
    if (correctAnswers) {
      await this.renderAnswers('.correct-answers', correctAnswers);
      this.correctAnswersTitle.innerHTML = `Правильных: ${correctAnswers.length}`;
    }
    if (wrongAnswers) {
      await this.renderAnswers('.wrong-answers', wrongAnswers);
      this.wrongAnswersTitle.innerHTML = `Ошибочных: ${wrongAnswers.length}`;
    }
    this.renderResult(score, correctWords, wrongWords);
  }

  async renderAnswers(parent: string, answers: (IWord | undefined)[]): Promise<void> {
    const parentNode = document.querySelector(parent);
    if (parentNode) {
      parentNode.innerHTML = '';
      answers.forEach((item, index) => {
        if (item) {
          parentNode.appendChild(this.renderAnswer(item, index + 1));
        }
      });
    }
  }

  renderAnswer(item: IWord, index: number): HTMLElement {
    const audio = new Audio();
    audio.src = `${Endpoints.AppHost}/${item.audio}`;
    const audioWrapper = newComponent('span', soundSVG(), ['answer__sound']);
    audioWrapper.onclick = () => audio.play();
    const number = newComponent('span', String(index), ['answer__index']);
    const word = newComponent('span', item.word, ['answer__word']);
    const translate = newComponent('span', item.wordTranslate, ['answer__translate']);
    const wordWrapper = newComponent('div', '', ['answer__word__wrapper']);
    const result: HTMLElement = newComponent('div', '', ['answer__wrapper']);
    result.appendChild(number);
    result.appendChild(audioWrapper);
    wordWrapper.appendChild(word);
    wordWrapper.appendChild(translate);
    result.appendChild(wordWrapper);
    return result;
  }

  switchView(view: string) {
    if (view === 'answers') {
      this.answersWrapper.classList.add('active');
      this.statisticWrapper.classList.remove('active');
    } else {
      this.answersWrapper.classList.remove('active');
      this.statisticWrapper.classList.add('active');
    }
  }

  exit() {
    this.root.innerHTML = '';
    if (this.root.parentElement) {
      this.root.parentElement.remove();
    }
    document.body.style.overflow = 'auto';
  }
}
