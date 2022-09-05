/* eslint-disable prettier/prettier */
import { newComponent, SignIn, SignUp } from '../../components';
import './auth.css';
import { Button } from '../../components/statistics';

export class AuthPageView {
  root: HTMLElement;

  constructor() {
    this.root = newComponent('div', '', ['page']);
    this.root.id = 'auth-page';
    this.root.insertAdjacentHTML(
      'beforeend',
      `
        <div class="auth-page__text-wrapper">
            <p class="auth-page__text"></p>
        </div>
        <div class="auth-page__input-wrapper">
            <div class="auth-buttons">
                
            </div>
            <div id="auth-inputs">
            
            </div>
        </div>
      `,
    );
  }

  render(): HTMLElement {
    document.addEventListener('click', (e) => {
      const signIn = new SignIn();
      const signUp = new SignUp();
      const target = <HTMLElement>e.target;
      if (target.innerText === 'SignIn') {
        signIn.init();
      }

      if (target.innerText === 'SignUp') {
        signUp.init();
      }

      if (target.innerText === 'LogOut') {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        // const authHref = <HTMLElement>document.getElementById('authHref');
        // authHref.innerText = 'Авторизатция';
        const authPage = <HTMLElement>document.getElementById('auth-page');
        authPage.innerHTML = '';
        authPage.insertAdjacentHTML(
          'beforeend',
          ` <div class="auth-page__text-wrapper">
                    <p class="auth-page__text"></p>
                 </div>
                <div class="auth-page__input-wrapper">
                   <div class="auth-buttons">
                       
                    </div>
                    <div id="auth-inputs">
                
                    </div>
                </div>`,
        );
        signIn.init();

        const statistics = <HTMLElement>document.getElementById('statistic-page');
        statistics.innerHTML = '';
        statistics.insertAdjacentHTML(
          'beforeend',
          `<div class="statistic-wrapper">
                <div class="statistic-text">Log in to get your results</div>
                <div>${Button.getButtonImage()}</div>
              </div>`,
        );
      }
    });

    return this.root;
  }
}
