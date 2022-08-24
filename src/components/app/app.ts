import MainView from '../../pages/main.view';
import { AppView } from './app.view';
import { SignUp, SignIn } from '../auth';

export class App {
  public init(): void {
    this.renderApp();
    this.addEventListener();
  }

  public renderApp(): void {
    const root = <HTMLElement>document.getElementById('root');
    root.innerHTML = AppView.getAppImage();

    const mainView = new MainView();
    mainView.render();
  }

  public addEventListener() {
    // Click SignUp button
    (<HTMLElement>document.querySelector('.signUp-button')).addEventListener('click', () => {
      const signUp = new SignUp();
      signUp.init();
    });

    // Click SignIn button
    (<HTMLElement>document.querySelector('.signIn-button')).addEventListener('click', () => {
      const signIn = new SignIn();
      signIn.init();
    });

    // Click LogOut button
    document.addEventListener('click', (e) => {
      const target = <HTMLElement>e.target;
      if (target.classList.contains('logOut-button')) {
        localStorage.removeItem('token');
        this.init();
      }
    });
  }
}
