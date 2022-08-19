import Name from '../view/name/name';
import Email from '../view/email/email';
import Password from '../view/password/password';
import Submit from '../view/submit/submit';
import './signUp.css';

export default abstract class SignUpView {
  public static getSignUpImage(): string {
    return `
        <div class="signUp-wrapper">
            ${Name.getNameImage()}
            ${Email.getEmailImage()}
            ${Password.getPasswordImage()}
            ${Submit.getSubmitButtonImage()}
        </div>`;
  }
}
