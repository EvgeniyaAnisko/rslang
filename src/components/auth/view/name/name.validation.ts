export default class NameValidation {
  public static nameValidation() {
    const name = document.getElementById('name') as HTMLInputElement;

    name.addEventListener('blur', () => {
      const invalidEmail = document.querySelector('.invalid-name') as HTMLElement;
      if (name.value === '') {
        name.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });

    name.addEventListener('input', (e) => {
      const invalidEmail = document.querySelector('.invalid-name') as HTMLElement;
      const target = e.target as HTMLInputElement;
      if (target.value !== '') {
        name.classList.remove('invalid');
        name.classList.add('valid');
        invalidEmail.classList.add('hidden');
      } else {
        name.classList.remove('valid');
        name.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });
  }
}
