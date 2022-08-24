import './submit.css';

export abstract class Submit {
  public static getSubmitButtonImage() {
    return `
             <div class="submit-wrapper">
                <button class="submit-button">Submit</button>
            </div>
            <p class="incorrect-inputs hidden">Incorrect email or password!</p>`;
  }
}
