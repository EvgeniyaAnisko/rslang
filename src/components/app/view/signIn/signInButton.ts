import './signInButton.css';

export default class SignInButton {
  public static getSignInButtonImage() {
    return `
        <div>
            <button class="signIn-button">SignIn</button>
        </div>
        `;
  }
}
