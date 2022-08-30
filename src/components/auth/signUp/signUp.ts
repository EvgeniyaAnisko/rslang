import { SignUpView } from './signUp.view';
import { AuthService } from '../../../core';
import { EmailValidation, PasswordValidation, NameValidation } from '../view';
import { SignIn } from '../signIn';
import { SignInButton, SignUpButton } from '../../app';

export class SignUp {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public init(): void {
    SignUp.renderSignUp();
    this.addEventListener();
  }

  private static renderSignUp(): void {
    const root = <HTMLElement>document.getElementById('auth-inputs');
    root.innerHTML = SignUpView.getSignUpImage();

    const buttons = <HTMLElement>document.querySelector('.auth-buttons');
    buttons.innerHTML = '';
    buttons.insertAdjacentHTML('beforeend', SignInButton.getSignInButtonImage());
    buttons.insertAdjacentHTML('beforeend', SignUpButton.getSignUpButtonImage());

    const text = <HTMLElement>document.querySelector('.auth-page__text');
    text.innerHTML = '';
    text.insertAdjacentHTML(
      'beforeend',
      'For authorization, enter your <span class="auth-page__span">name</span>, <span class="auth-page__span">email</span> and <span class="auth-page__span">password</span>!',
    );
  }

  private async signUp(): Promise<void> {
    const name = <HTMLInputElement>document.getElementById('name');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    const res = await this.authService.signUp({ name: name.value, email: email.value, password: password.value });
    if (res) {
      const signIn = new SignIn();
      signIn.init();
    } else {
      const incorrectInputs = <HTMLElement>document.querySelector('.incorrect-inputs');
      incorrectInputs.classList.remove('hidden');
    }
  }

  private addEventListener() {
    const submitButton = <HTMLElement>document.querySelector('.submit-button');
    const name = <HTMLInputElement>document.getElementById('name');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    NameValidation.nameValidation();
    EmailValidation.emailValidation();
    PasswordValidation.passwordValidation();

    submitButton.addEventListener('click', () => {
      if (email.classList.contains('valid') && password.classList.contains('valid')) {
        if (name.classList.contains('valid')) {
          // eslint-disable-next-line no-void
          void this.signUp().then();
        }
      } else {
        name.focus();
        email.focus();
        password.focus();
        password.blur();
      }
    });
  }
}
