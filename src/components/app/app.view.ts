import { SignInButton, SignUpButton } from './view';
import './app.css';

export abstract class AppView {
  public static getAppImage(): string {
    return `
        <div id="app">
            <div class="app-container">
                <div class="app-container__buttons">
                   ${SignInButton.getSignInButtonImage()}
                   ${SignUpButton.getSignUpButtonImage()} 
                </div>
            </div>
        </div>`;
  }
}
