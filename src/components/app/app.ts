import MainView from '../../pages/main.view';

export default class App {
  public init(): void {
    this.renderApp();
  }

  public renderApp(): void {
    const mainView = new MainView();
    mainView.render();
  }
}
