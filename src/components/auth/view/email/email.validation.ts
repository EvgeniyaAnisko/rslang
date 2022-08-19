export default class EmailValidation {
  public static emailValidation() {
    const email = document.getElementById('email') as HTMLInputElement;

    email.addEventListener('blur', () => {
      const invalidEmail = document.querySelector('.invalid-email') as HTMLElement;
      if (email.value === '' || !email.value.slice(-10).includes('@gmail.com')) {
        email.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });

    email.addEventListener('input', (e) => {
      const invalidEmail = document.querySelector('.invalid-email') as HTMLElement;
      const target = e.target as HTMLInputElement;
      if (target.value !== '' && target.value.slice(-10).includes('@gmail.com')) {
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
