export default class PasswordValidation {
  public static passwordValidation() {
    const password = document.getElementById('password') as HTMLInputElement;

    password.addEventListener('blur', () => {
      const invalidPassword = document.querySelector('.invalid-password') as HTMLElement;
      if (password.value === '' || password.value.length < 8) {
        password.classList.add('invalid');
        invalidPassword.classList.remove('hidden');
      }
    });

    password.addEventListener('input', (e) => {
      const invalidPassword = document.querySelector('.invalid-password') as HTMLElement;
      const target = e.target as HTMLInputElement;
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
  }
}
