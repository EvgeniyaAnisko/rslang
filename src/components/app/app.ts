import MainView from '../../pages/main.view';
import { SignIn } from '../auth';
import { User } from '../user';
import { Statistics } from '../statistics';

export class App {
  public init(): void {
    this.renderApp();
  }

  public renderApp(): void {
    const signIn = new SignIn();
    const mainView = new MainView();
    mainView.render();
    if (!localStorage.getItem('token')) {
      signIn.init();
    } else {
      new User().init();
      new Statistics().init();
    }
  }
}
