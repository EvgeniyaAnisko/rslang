export default abstract class AppView {
  public static getAppImage(): string {
    return `
        <div id="app">
            <div class="app-container">
                <div class="app-container__buttons">
                    <button class="signUp">SignUp</button>
                    <button class="signIn">SignIn</button>
                </div>
            </div>
        </div>`;
  }
}
