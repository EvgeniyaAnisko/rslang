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
    (document.querySelector('.signUp') as HTMLElement).addEventListener('click', () => {
      const signUp = new SignUp();
      signUp.init();
    });

    (document.querySelector('.signIn') as HTMLElement).addEventListener('click', () => {
      const signIn = new SignIn();
      signIn.init();
    });
  }
}
