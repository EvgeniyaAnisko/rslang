import AppView from './app.view';
import SignUp from '../auth/signUp/signUp';
import SignIn from '../auth/signIn/signIn';

export default class App {
  public init(): void {
    this.renderApp();
    this.addEventListener();
  }

  public renderApp(): void {
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML = AppView.getAppImage();
  }

  public addEventListener() {
    (document.querySelector('.signUp-button') as HTMLElement).addEventListener('click', () => {
      const signUp = new SignUp();
      signUp.init();
    });

    (document.querySelector('.signIn-button') as HTMLElement).addEventListener('click', () => {
      const signIn = new SignIn();
      signIn.init();
    });

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('logOut-button')) {
        this.init();
      }
    });
  }
}
