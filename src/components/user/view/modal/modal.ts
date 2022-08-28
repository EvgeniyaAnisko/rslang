import { ModalView } from './modal.view';
import { UserService } from '../../../../core/services/user';

export class Modal {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public init() {
    Modal.render();
    this.addEventListener();
  }

  private static render() {
    const user = <HTMLElement>document.querySelector('.user-wrapper');
    user.insertAdjacentHTML('beforeend', ModalView.getModalImage());
  }

  private async edit(): Promise<void> {
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    await this.userService.editUser({ email: email.value, password: password.value });
  }

  private addEventListener() {
    const save = <HTMLElement>document.querySelector('.modal-save');
    const cancel = <HTMLElement>document.querySelector('.modal-cancel');
    const modal = <HTMLElement>document.querySelector('.modal-wrapper');
    const modalBackground = <HTMLElement>document.querySelector('.modal-background');
    const { body } = document;
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');

    cancel.addEventListener('click', () => {
      modal.classList.remove('active');
      modalBackground.classList.remove('active-background');
      body.style.overflow = 'visible';
    });

    save.addEventListener('click', () => {
      if (email.classList.contains('valid') && password.classList.contains('valid')) {
        // eslint-disable-next-line no-void
        void this.edit();
        cancel.click();
      }
    });
  }
}
