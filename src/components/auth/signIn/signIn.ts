/* eslint-disable prettier/prettier */
import { SignInView } from './signIn.view';
import { AuthService } from '../../../core';
import { EmailValidation, PasswordValidation } from '../view';
import { User } from '../../user';
import { SignInButton, SignUpButton } from '../../app';
import './signIn.css';
import { Statistics } from '../../statistics';
import { StatisticService } from '../../../core/services/statistic';

export class SignIn {
  private authService: AuthService;

  private statisticService: StatisticService;

  constructor() {
    this.authService = new AuthService();
    this.statisticService = new StatisticService();
  }

  public init(): void {
    SignIn.renderSignIn();
    this.addEventListener();
  }

  private static renderSignIn(): void {
    const authPage = <HTMLElement>document.getElementById('auth-inputs');
    authPage.innerHTML = SignInView.getSignInImage();

    const buttons = <HTMLElement>document.querySelector('.auth-buttons');
    buttons.innerHTML = '';
    buttons.insertAdjacentHTML('beforeend', SignInButton.getSignInButtonImage());
    buttons.insertAdjacentHTML('beforeend', SignUpButton.getSignUpButtonImage());

    const text = <HTMLElement>document.querySelector('.auth-page__text');
    text.innerHTML = '';
    text.insertAdjacentHTML(
      'beforeend',
      'Enter your <span class="auth-page__span">email</span> and <span class="auth-page__span">password</span> to log in to your account!',
    );
  }

  private async signIn(): Promise<void> {
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    const res = await this.authService.signIn({ email: email.value, password: password.value });
    if (res) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.userId);
      new User().init();

      const getStat = await this.statisticService.get();
      if (!getStat) {
        await this.statisticService.put({
          learnedWords: 0,
          optional: {
            maxAudio: 0,
            maxSprint: 0,
            lastAudio: 0,
            lastSpring: 0,
          },
        });
      }
      new Statistics().init();
    } else {
      const incorrectInputs = <HTMLElement>document.querySelector('.incorrect-inputs');
      incorrectInputs.classList.remove('hidden');
    }
  }

  private addEventListener() {
    const submitButton = <HTMLElement>document.querySelector('.submit-button');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    EmailValidation.emailValidation();
    PasswordValidation.passwordValidation();

    submitButton.addEventListener('click', () => {
      if (email.classList.contains('valid') && password.classList.contains('valid')) {
        // eslint-disable-next-line no-void
        void this.signIn().then();
      } else {
        email.focus();
        password.focus();
        password.blur();
      }
    });
  }
}
