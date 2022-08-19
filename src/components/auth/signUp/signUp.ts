import SignUpView from './signUp.view';

export default class SignUp {
  public static init(): void {
    this.renderSignUp();
  }

  private static renderSignUp(): void {
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML = SignUpView.getSignUpImage();
  }
}
