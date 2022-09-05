/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-plusplus */
import { ResultPageView } from '..';
import { soundSVG } from '../../components';
import { Endpoints, IWord, WordsRepository } from '../../core';

export class Audiocall {
  words: Array<IWord> = [];
  private countWrong = 0;
  private countCorrect = 0;
  page = 0;
  group = 0;

  audiocallWrapper!: HTMLElement;
  audiocallTitle!: HTMLElement;
  audiocallQuestionSound!: HTMLElement;

  blockWrapper!: HTMLElement;
  block1!: HTMLElement;
  block2!: HTMLElement;
  block3!: HTMLElement;
  block4!: HTMLElement;
  block5!: HTMLElement;

  life1!: HTMLElement;
  life2!: HTMLElement;
  life3!: HTMLElement;
  life4!: HTMLElement;
  life5!: HTMLElement;
  correctAnswers: (IWord | undefined)[] = [];
  wrongAnswers: IWord[] = [];

  resultPage!: ResultPageView;
  resultPageView!: HTMLElement;
  listner!: (event: KeyboardEvent) => void;
  life = 5;
  currentAnswer!: IWord;
  mouseListner!: (event: MouseEvent) => void;

  async getWords(): Promise<void> {
    this.words.push(...(await new WordsRepository().getWords(this.page, this.group)));
  }

  async startGame(page: number, group?: number) {
    this.page = page;
    if (group) this.group = group;
    await this.getWords();

    this.generateQuestion();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    this.listner = (event: KeyboardEvent): void => {
      switch (event.key) {
        case '1':
          this.correctWord(this.block1.dataset.word);
          break;
        case '2':
          this.correctWord(this.block2.dataset.word);
          break;
        case '3':
          this.correctWord(this.block3.dataset.word);
          break;
        case '4':
          this.correctWord(this.block4.dataset.word);
          break;
        case '5':
          this.correctWord(this.block5.dataset.word);
          break;
        default:
          break;
      }
    };

    this.mouseListner = (event: MouseEvent) => {
      const target = <HTMLElement>event.target;
      if (target.classList.contains('audiocall-block')) {
        this.correctWord(target.dataset.word);
      }
    };

    this.blockWrapper.addEventListener('click', this.mouseListner);

    document.addEventListener('keydown', this.listner);
  }

  correctWord(answer: string | undefined) {
    if (answer && this.currentAnswer.word === answer) {
      this.countCorrect++;
      if (!this.correctAnswers.includes(this.currentAnswer) && !this.wrongAnswers.includes(this.currentAnswer)) {
        this.correctAnswers.push(this.words.shift());
      }
      if (this.wrongAnswers.includes(this.currentAnswer)) {
        this.wrongAnswers.splice(this.wrongAnswers.indexOf(this.currentAnswer));
      }
    } else {
      this.life--;
      if (!this.wrongAnswers.includes(this.currentAnswer)) this.wrongAnswers.push(this.currentAnswer);
      if (this.correctAnswers.includes(this.currentAnswer)) {
        this.correctAnswers.splice(this.correctAnswers.indexOf(this.currentAnswer));
      }
      this.countWrong++;
    }
    this.updateViewLife();
    this.generateResult();
  }

  generateResult() {
    this.audiocallQuestionSound.innerHTML = `<img src="${Endpoints.AppHost}/${this.currentAnswer.image}" alt="" class="app-word__img">`;
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.audiocallTitle.innerHTML = this.currentAnswer.word;
    document.removeEventListener('keydown', this.listner);
    this.blockWrapper.removeEventListener('click', this.mouseListner);
    this.updateViewButton('add');
    setTimeout(() => {
      if (this.life < 1) this.stopGame();
      else this.generateQuestion();
    }, 5000);
  }

  updateViewButton(options: 'add' | 'remove') {
    if (options === 'add') {
      this.block1.dataset.word === this.currentAnswer.word
        ? this.block1.classList.add('correct')
        : this.block1.classList.add('error');
      this.block2.dataset.word === this.currentAnswer.word
        ? this.block2.classList.add('correct')
        : this.block2.classList.add('error');
      this.block3.dataset.word === this.currentAnswer.word
        ? this.block3.classList.add('correct')
        : this.block3.classList.add('error');
      this.block4.dataset.word === this.currentAnswer.word
        ? this.block4.classList.add('correct')
        : this.block4.classList.add('error');
      this.block5.dataset.word === this.currentAnswer.word
        ? this.block5.classList.add('correct')
        : this.block5.classList.add('error');
    }
    if (options === 'remove') {
      this.block1.classList.remove('error');
      this.block2.classList.remove('error');
      this.block3.classList.remove('error');
      this.block4.classList.remove('error');
      this.block5.classList.remove('error');
      this.block1.classList.remove('correct');
      this.block2.classList.remove('correct');
      this.block3.classList.remove('correct');
      this.block4.classList.remove('correct');
      this.block5.classList.remove('correct');
    }
  }

  async generateQuestion() {
    this.updateViewButton('remove');
    if (this.words.length < 5) {
      this.group--;
      await this.getWords();
    }
    this.words.sort(() => Math.random() - 0.5);
    this.getActualWord(0);
    document.addEventListener('keydown', this.listner);
    this.blockWrapper.addEventListener('click', this.mouseListner);
  }

  getActualWord(indexActual: number): void {
    this.audiocallQuestionSound.innerHTML = soundSVG();
    this.audiocallTitle.innerHTML = '?';
    // this.words.sort(() => Math.random() - 0.5);
    this.currentAnswer = this.words[indexActual];
    const audio = new Audio();
    audio.src = `${Endpoints.AppHost}/${this.words[indexActual].audio}`;
    this.audiocallQuestionSound.onclick = () => audio.play();
    const tempArr = this.words.slice(0, 5);
    tempArr.sort(() => Math.random() - 0.5);
    this.block1.innerHTML = `1. ${tempArr[0].wordTranslate}`;
    this.block1.dataset.word = tempArr[0].word;
    this.block2.innerHTML = `2. ${tempArr[1].wordTranslate}`;
    this.block2.dataset.word = tempArr[1].word;
    this.block3.innerHTML = `3. ${tempArr[2].wordTranslate}`;
    this.block3.dataset.word = tempArr[2].word;
    this.block4.innerHTML = `4. ${tempArr[3].wordTranslate}`;
    this.block4.dataset.word = tempArr[3].word;
    this.block5.innerHTML = `5. ${tempArr[4].wordTranslate}`;
    this.block5.dataset.word = tempArr[4].word;
  }

  updateViewLife() {
    switch (this.life) {
      case 4:
        this.life1.classList.add('inactive');
        break;
      case 3:
        this.life2.classList.add('inactive');
        break;
      case 2:
        this.life3.classList.add('inactive');
        break;
      case 1:
        this.life4.classList.add('inactive');
        break;
      case 0:
        this.life5.classList.add('inactive');
        break;
      default:
        break;
    }
  }

  stopGame() {
    if (this.life < 1) {
      this.resultPage.updateRender(
        this.correctAnswers,
        this.wrongAnswers,
        0,
        this.countCorrect,
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        this.countWrong
      );
      this.resultPageView.style.display = 'flex';
      document.removeEventListener('keydown', this.listner);
      this.blockWrapper.removeEventListener('click', this.mouseListner);
      this.audiocallWrapper.innerHTML = '';
    }
  }
}
