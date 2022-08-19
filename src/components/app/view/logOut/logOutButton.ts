import './LogOutButton.css';

export default class LogOutButton {
  public static getLogOutButtonImage() {
    return `
        <div>
            <button class="logOut-button">LogOut</button>
        </div>
        `;
  }
}
