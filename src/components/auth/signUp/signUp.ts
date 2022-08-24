import { SignUpView } from './signUp.view';
import { AuthService } from '../../../core';
import { EmailValidation, PasswordValidation, NameValidation } from '../view';

export class SignUp {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public init(): void {
    this.renderSignUp();
    this.addEventListener();
  }

  private renderSignUp(): void {
    const root = <HTMLElement>document.getElementById('root');
    root.innerHTML = SignUpView.getSignUpImage();
  }

  private async signUp(): Promise<void> {
    const name = <HTMLInputElement>document.getElementById('name');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    const res = await this.authService.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    if (res) {
      const root = <HTMLElement>document.getElementById('root');
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', '<h4>You successfully registered. SignIn to the App</h4>');
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
      }
    });
  }
}
