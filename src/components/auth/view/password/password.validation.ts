export class PasswordValidation {
  public static passwordValidation() {
    const password = <HTMLInputElement>document.getElementById('password');
    const passwordView = <HTMLElement>document.querySelector('.password-view');

    password.addEventListener('blur', () => {
      const invalidPassword = <HTMLElement>document.querySelector('.invalid-password');
      if (password.value === '' || password.value.length < 8) {
        password.classList.add('invalid');
        invalidPassword.classList.remove('hidden');
      }
    });

    password.addEventListener('input', (e) => {
      const invalidPassword = <HTMLElement>document.querySelector('.invalid-password');
      const target = <HTMLInputElement>e.target;
      if (target.value !== '' && target.value.length >= 8) {
        password.classList.remove('invalid');
        password.classList.add('valid');
        invalidPassword.classList.add('hidden');
      } else {
        password.classList.remove('valid');
        password.classList.add('invalid');
        invalidPassword.classList.remove('hidden');
      }
    });

    passwordView.addEventListener('click', () => {
      const viewImage = <HTMLImageElement>document.querySelector('.view-image');
      if (password.type === 'password') {
        password.type = 'text';
        viewImage.src = './src/assets/password.view/view.png';
      } else {
        password.type = 'password';
        viewImage.src = './src/assets/password.view/hidden.png';
      }
    });
  }
}
