import { UserService } from '../../core/services/user';
import { UserView } from './user.view';
import { ISignUp } from '../../core';
import { EmailValidation, PasswordValidation } from '../auth';
import { Modal } from './view/modal';

export class User {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public init(): void {
    this.renderUser();
  }

  private async renderUser(): Promise<void> {
    const user = <ISignUp>await this.userService.getUser();
    const authHref = <HTMLElement>document.getElementById('authHref');
    authHref.innerText = user.name;
    const authPage = <HTMLElement>document.getElementById('auth-page');
    authPage.innerHTML = UserView.getUserImage(user);
    new Modal().init();
    EmailValidation.emailValidation();
    PasswordValidation.passwordValidation();

    const edit = <HTMLElement>document.querySelector('.edit-button');
    const modal = <HTMLElement>document.querySelector('.modal-wrapper');
    const modalBackground = <HTMLElement>document.querySelector('.modal-background');
    const { body } = document;

    edit.addEventListener('click', () => {
      modal.classList.add('active');
      modalBackground.classList.add('active-background');
      body.style.overflow = 'hidden';
    });
  }
}
