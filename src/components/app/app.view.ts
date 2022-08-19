import SignInButton from './view/signIn/signInButton';
import SignUpButton from './view/signUp/signUpButton';
import './app.css';

export default abstract class AppView {
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
