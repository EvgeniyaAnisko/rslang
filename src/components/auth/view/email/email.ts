import './email.css';

export default abstract class Email {
  public static getEmailImage() {
    return `
            <div class="email-wrapper">
                <label for="email" class="email-label">Email</label>
                <input type="email" class="email" id="email">
                <small class="invalid-email hidden">Please enter correct email!</small>
            </div>`;
  }
}
