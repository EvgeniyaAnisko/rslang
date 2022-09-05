import './password.css';

export abstract class Password {
  public static getPasswordImage() {
    return `
           <div class="password-wrapper">
                <label for="password" class="password-label">Password</label>
                <input type="password" class="password" id="password"> 
                <button class="password-view"><img src="./src/assets/password.view/hidden.png" class="view-image" alt="View"></button>
                <small class="invalid-password hidden">Password must be at least 8 symbols</small>
            </div>`;
  }
}
