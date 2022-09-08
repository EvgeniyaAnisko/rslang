export class EmailValidation {
  public static emailValidation() {
    const email = <HTMLInputElement>document.getElementById('email');

    email.addEventListener('blur', () => {
      const invalidEmail = <HTMLElement>document.querySelector('.invalid-email');
      if (!email.value.match(/\S+@\S+\.\S+/)) {
        email.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });

    email.addEventListener('input', (e) => {
      const invalidEmail = <HTMLElement>document.querySelector('.invalid-email');
      const target = <HTMLInputElement>e.target;
      if (target.value !== '' && target.value.match(/\S+@\S+\.\S+/)) {
        email.classList.remove('invalid');
        email.classList.add('valid');
        invalidEmail.classList.add('hidden');
      } else {
        email.classList.remove('valid');
        email.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });
  }
}
