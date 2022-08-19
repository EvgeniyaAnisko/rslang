import './password.css';

export default abstract class Password {
  public static getPasswordImage() {
    return `
           <div class="password-wrapper">
                <label for="password" class="password-label">Password</label>
                <input type="password" class="password" id="password">
                <small class="invalid-password hidden">Password must be at least 8 symbols</small>
            </div>`;
  }
}
