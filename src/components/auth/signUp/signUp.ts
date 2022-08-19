import SignUpView from './signUp.view';
import AuthService from '../../../core/services/auth/auth.service';
import EmailValidation from '../view/email/email.validation';
import PasswordValidation from '../view/password/password.validation';
import NameValidation from '../view/name/name.validation';

export default class SignUp {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public init(): void {
    this.renderSignUp();
    this.addEventListener();
  }

  private renderSignUp(): void {
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML = SignUpView.getSignUpImage();
  }

  private async signUp(): Promise<void> {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    const res = await this.authService.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    if (res) {
      const root = document.getElementById('root') as HTMLElement;
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', `<p>Name: ${res.name}</p>`);
      root.insertAdjacentHTML('beforeend', `<p>Email: ${res.email}</p>`);
      root.insertAdjacentHTML('beforeend', `<p>Password: ${res.password}</p>`);
    } else {
      const incorrectInputs = document.querySelector('.incorrect-inputs') as HTMLElement;
      incorrectInputs.classList.remove('hidden');
    }
  }

  private addEventListener() {
    const submitButton = document.querySelector('.submit-button') as HTMLElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

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
