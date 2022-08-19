import './name.css';

export default abstract class Name {
  public static getNameImage() {
    return `
        <div class="name-wrapper">
            <label for="name" class="name-label">Name</label>
            <input type="text" class="name" id="name">
            <small class="invalid-name hidden">Please enter name!</small>
        </div>
        `;
  }
}
