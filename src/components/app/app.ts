import MainView from '../../pages/main.view';

export class App {
  public init(): void {
    this.renderApp();
  }

  public renderApp(): void {
    const mainView = new MainView();
    mainView.render();
  }
}
