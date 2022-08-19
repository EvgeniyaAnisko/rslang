export default abstract class SignInView {
  public static getSignInImage(): string {
    return `
        <div class="signIn-wrapper">
            <div class="signIn-wrapper__input">
                <label for="email" class="email-label">Email</label>
                <input type="email" class="email" id="email">
                <small class="invalid-email hidden">Please enter correct email!</small>
            </div>
            <div class="signIn-wrapper__input">
                <label for="password" class="password-label">Password</label>
                <input type="password" class="password" id="password">
                <small class="invalid-password hidden">Password must be at least 8 symbols</small>
            </div>
            <div class="signIn-wrapper__input">
                <button class="signIn-submit">Submit</button>
            </div>
        </div>`;
  }
}
