/* eslint-disable object-curly-newline */
import './signUp.css';
import { Name, Email, Password, Submit } from '../view';

export abstract class SignUpView {
  public static getSignUpImage(): string {
    return `
        <div class="signUp-wrapper">
            <h2>SignUp</h2>
            ${Name.getNameImage()}
            ${Email.getEmailImage()}
            ${Password.getPasswordImage()}
            ${Submit.getSubmitButtonImage()}
        </div>`;
  }
}
