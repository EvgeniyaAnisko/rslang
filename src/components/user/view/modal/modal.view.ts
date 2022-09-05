import { Email, Password } from '../../../auth';
import './modal.css';

export abstract class ModalView {
  public static getModalImage() {
    return `
        <div class="modal-wrapper">
            <div class="modal-title">Edit</div>
            <div>
                <div class="modal-wrapper__email">
                    ${Email.getEmailImage()}
                </div>
                <div class="modal-wrapper__password">
                    ${Password.getPasswordImage()}
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-save">Save</button>
                <button class="modal-cancel">Cancel</button>
            </div>
            <div class="modal-background"></div>
        </div>
        `;
  }
}
