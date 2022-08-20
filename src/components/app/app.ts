import AppView from './app.view';
import SignUp from '../auth/signUp/signUp';
import SignIn from '../auth/signIn/signIn';

export default class App {
  public init(): void {
    this.renderApp();
    this.addEventListener();
  }

  public renderApp(): void {
    const root = <HTMLElement>document.getElementById('root');
    root.innerHTML = AppView.getAppImage();
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
