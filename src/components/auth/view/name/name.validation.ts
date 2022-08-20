export default class NameValidation {
  public static nameValidation() {
    const name = <HTMLInputElement>document.getElementById('name');

    name.addEventListener('blur', () => {
      const invalidEmail = <HTMLElement>document.querySelector('.invalid-name');
      if (name.value === '') {
        name.classList.add('invalid');
        invalidEmail.classList.remove('hidden');
      }
    });

    name.addEventListener('input', (e) => {
      const invalidEmail = <HTMLElement>document.querySelector('.invalid-name');
      const target = <HTMLInputElement>e.target;
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
