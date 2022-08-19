import SignInView from './signIn.view';
import AuthService from '../../../core/services/auth/auth.service';
import './signIn.css';
import AppView from '../../app/app.view';

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

    if (email.value === '' || !email.value.slice(-10).includes('@gmail.com')) {
      email.classList.add('invalid');
      const invalidEmail = document.querySelector('.invalid-email') as HTMLElement;
      invalidEmail.classList.toggle('hidden');
    } else if (password.value === '' || password.value.length < 8) {
      password.classList.add('invalid');
      const invalidPassword = document.querySelector('.invalid-password') as HTMLElement;
      invalidPassword.classList.toggle('hidden');
    } else {
      const res = await this.authService.signIn({ email: email.value, password: password.value });
      if (res) {
        const root = document.getElementById('root') as HTMLElement;
        root.innerHTML = AppView.getAppImage();
        root.insertAdjacentHTML('beforeend', `<p>Message: ${res.message}</p>`);
        root.insertAdjacentHTML('beforeend', `<p>Name: ${res.name}</p>`);
        root.insertAdjacentHTML('beforeend', `<p>UserId: ${res.userId}</p>`);
        root.insertAdjacentHTML('beforeend', `<p>Token: ${res.token}</p>`);
        root.insertAdjacentHTML('beforeend', `<p>RefreshToken: ${res.refreshToken}</p>`);
      }
    }
  }

  private addEventListener() {
    const submitButton = document.querySelector('.signIn-submit') as HTMLElement;

    submitButton.addEventListener('click', () => {
      // eslint-disable-next-line no-void
      void this.signIn().then();
    });
  }
}
