/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-param-reassign */
import { Endpoints, IWord, WordsRepository } from '../../core';
import { ResultPageView } from '../result';
import { Timer } from './timer';

const BASE_SCORE_STEP = 20;

const TIME_GAME = 10;

enum Cofficient {
  start = 1,
  advance = 2,
  super = 3,
  extra = 4,
}

export class Sprint {
  words!: Array<IWord>;
  timer: Timer;
  protected timerFinish = false;
  protected timerInterval: string | number | NodeJS.Timeout | null | undefined;
  private countWrong = 0;
  private countCorrect = 0;
  page = 0;
  group = 0;
  sprintWrapper!: HTMLElement;
  timerContainer!: HTMLElement;
  temporaryScore!: HTMLElement;
  wordEnglish!: HTMLElement;
  wordTranslate!: HTMLElement;
  wordImage!: HTMLElement;
  buttonCorrect!: HTMLElement;
  buttonIncorrect!: HTMLElement;
  block1!: HTMLElement;
  block2!: HTMLElement;
  block3!: HTMLElement;
  block4!: HTMLElement;
  correctAnswers: (IWord | undefined)[] = [];
  wrongAnswers: IWord[] = [];
  isRightAnswer = false;
  totalScore = 0;
  cofficient: Cofficient = Cofficient.start;
  seriesСorrectAnswers = 0;

  resultPage!: ResultPageView;
  resultPageView!: HTMLElement;
  listner!: (event: KeyboardEvent) => void;
  incorrectButtonListner!: () => void;
  correctButtonListner!: () => void;

  constructor() {
    this.timer = new Timer(TIME_GAME);
  }

  async getWords(): Promise<void> {
    this.words = await new WordsRepository().getWords(this.page, this.group);
    this.words.sort(() => Math.random() - 0.5);
  }

  async startGame(page: number, group?: number) {
    this.page = page;
    if (group) this.group = group;
    await this.getWords();

    this.generateQuestion();

    this.correctButtonListner = () => this.correctWord(this.buttonCorrect.dataset.answer);
    this.buttonCorrect.addEventListener('click', this.correctButtonListner);
    this.incorrectButtonListner = () => this.correctWord(this.buttonIncorrect.dataset.answer);
    this.buttonIncorrect.addEventListener('click', this.incorrectButtonListner);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    this.listner = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowRight') {
        this.correctWord(this.buttonCorrect.dataset.answer);
      }
      if (event.key === 'ArrowLeft') {
        this.correctWord(this.buttonIncorrect.dataset.answer);
      }
    };

    document.addEventListener('keydown', this.listner);

    this.startTimer();
  }

  correctWord(answer: string | undefined) {
    if (String(this.isRightAnswer) === answer) {
      this.countCorrect++;
      this.seriesСorrectAnswers++;
      this.totalScore += this.cofficient * BASE_SCORE_STEP;
      this.temporaryScore.innerHTML = String(this.totalScore);
      if (this.isRightAnswer === true) {
        if (!this.correctAnswers.includes(this.words[0]) && !this.wrongAnswers.includes(this.words[0])) {
          this.correctAnswers.push(this.words.shift());
        }
        if (this.wrongAnswers.includes(this.words[0])) {
          this.wrongAnswers.splice(this.wrongAnswers.indexOf(this.words[0]));
        }
      }
    } else {
      this.seriesСorrectAnswers = 0;
      if (!this.wrongAnswers.includes(this.words[0])) this.wrongAnswers.push(this.words[0]);
      if (this.correctAnswers.includes(this.words[0])) {
        this.correctAnswers.splice(this.correctAnswers.indexOf(this.words[0]));
      }
      this.countWrong++;
    }
    this.words.sort(() => Math.random() - 0.5);
    this.updateCofficient();
    this.generateQuestion();
  }

  async generateQuestion() {
    if (this.words.length < 1) {
      this.group--;
      await this.getWords();
    }

    const randomText = Math.floor(Math.random() * (5 || this.words.length));
    this.isRightAnswer = randomText === 0;

    this.getActualWord(0, randomText);
  }

  getActualWord(indexActual: number, indexTranslate: number): void {
    this.wordImage.innerHTML = `<img src="${Endpoints.AppHost}/${this.words[indexActual].image}" alt="" class="app-word__img">`;
    this.wordEnglish.innerHTML = this.words[indexActual].word;
    this.wordTranslate.innerHTML = this.words[indexTranslate].wordTranslate;
  }

  updateCofficient() {
    if (this.seriesСorrectAnswers === 0) {
      this.cofficient = Cofficient.start;
      this.block1.classList.remove('active');
      this.block2.classList.remove('active');
      this.block3.classList.remove('active');
      this.block4.classList.remove('active');
    } else if (this.seriesСorrectAnswers < 2) {
      this.cofficient = Cofficient.start;
      this.block1.classList.add('active');
    } else if (this.seriesСorrectAnswers < 3) {
      this.cofficient = Cofficient.advance;
      this.block2.classList.add('active');
    } else if (this.seriesСorrectAnswers < 4) {
      this.cofficient = Cofficient.super;
      this.block3.classList.add('active');
    } else {
      this.cofficient = Cofficient.extra;
      this.block4.classList.add('active');
    }
  }

  // Timer function
  startTimer(): void {
    this.timer.start();
    this.timerContainer.innerHTML = String(this.timer.getSecondsLeft());
    this.timerInterval = setInterval(() => {
      const secondsLeft = this.timer.getSecondsLeft();
      if (secondsLeft > 0) {
        this.timerContainer.innerHTML = String(secondsLeft);
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    this.timer.pause();
  }

  continueTimer() {
    this.timer.continue();
  }

  stopTimer() {
    if (this.timerInterval !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      clearInterval(this.timerInterval);
      this.resultPage.updateRender(
        this.correctAnswers,
        this.wrongAnswers,
        this.totalScore,
        this.countCorrect,
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        this.countWrong
      );
      this.resultPageView.style.display = 'flex';
      document.removeEventListener('keydown', this.listner);
      this.buttonCorrect.removeEventListener('click', this.correctButtonListner);
      this.buttonIncorrect.removeEventListener('click', this.incorrectButtonListner);
      this.sprintWrapper.innerHTML = '';
      this.timerFinish = true;
    }
  }
}
