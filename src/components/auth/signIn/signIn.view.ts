import Email from '../view/email/email';
import Password from '../view/password/password';
import Submit from '../view/submit/submit';

export default abstract class SignInView {
  public static getSignInImage(): string {
    return `
        <div class="signIn-wrapper">
            ${Email.getEmailImage()}
            ${Password.getPasswordImage()}
            ${Submit.getSubmitButtonImage()}
        </div>`;
  }
}
