import './signInButton.css';

export class SignInButton {
  public static getSignInButtonImage() {
    return `
        <div>
            <button id="signInButton" class="signIn-button">SignIn</button>
        </div>
        `;
  }
}
