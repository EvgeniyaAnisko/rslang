import { Email, Password, Submit } from '../view';

export abstract class SignInView {
  public static getSignInImage(): string {
    return `
        <div class="signIn-wrapper">
            <h2>SignIn</h2>
            ${Email.getEmailImage()}
            ${Password.getPasswordImage()}
            ${Submit.getSubmitButtonImage()}
        </div>`;
  }
}
