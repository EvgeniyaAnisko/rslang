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
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML = SignInView.getSignInImage();
  }

  private async signIn(): Promise<void> {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    const res = await this.authService.signIn({ email: email.value, password: password.value });
    if (res) {
      const root = document.getElementById('root') as HTMLElement;
      root.innerHTML = '';
      root.insertAdjacentHTML('beforeend', `<div>${LogOutButton.getLogOutButtonImage()}</div>`);
      root.insertAdjacentHTML('beforeend', '<h3>Welcome to App</h3>');
    } else {
      const incorrectInputs = document.querySelector('.incorrect-inputs') as HTMLElement;
      incorrectInputs.classList.remove('hidden');
    }
  }

  private addEventListener() {
    const submitButton = document.querySelector('.submit-button') as HTMLElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

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
