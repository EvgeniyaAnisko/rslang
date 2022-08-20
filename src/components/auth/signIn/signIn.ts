import SignInView from './signIn.view';
import AuthService from '../../../core/services/auth/auth.service';
import EmailValidation from '../view/email/email.validation';
import PasswordValidation from '../view/password/password.validation';
import LogOutButton from '../../app/view/logOut/logOutButton';
import './signIn.css';

export default class SignIn {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public init(): void {
    this.renderSignIn();
    this.addEventListener();
  }

  private renderSignIn(): void {
    const root = <HTMLElement>document.getElementById('root');
    root.innerHTML = SignInView.getSignInImage();
  }

  private async signIn(): Promise<void> {
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    const res = await this.authService.signIn({ email: email.value, password: password.value });
    if (res) {
      localStorage.setItem('token', res.token);
      const root = <HTMLElement>document.getElementById('root');
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', `<div>${LogOutButton.getLogOutButtonImage()}</div>`);
      root.insertAdjacentHTML('beforeend', '<h3>Welcome to App</h3>');
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
      }
    });
  }
}
