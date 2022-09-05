import { Words } from '..';
import { WordsRepository, WordsService } from '../../core';
import MainView from '../../pages/main.view';
import { SignIn } from '../auth';
import { User } from '../user';

export class App {
  public init(): void {
    this.renderApp();
  }

  public renderApp(): void {
    const mainView = new MainView();
    mainView.render();
    const words = new Words(new WordsService(new WordsRepository()));
    words.init();
    const signIn = new SignIn();
    if (!localStorage.getItem('token')) {
      signIn.init();
    } else {
      new User().init();
    }
  }
}
