/* eslint-disable operator-linebreak */
import { titles } from '..';
import './pagination.css';

/* eslint-disable max-len */
export function pagination() {
  const titlesElement: Array<HTMLElement> = [];
  const linksElement = document.querySelectorAll('.nav-link');
  titles.forEach((item) => {
    const element: HTMLElement | null = document.querySelector(item.link);
    if (element) titlesElement.push(element);
  });
  titlesElement.forEach((target, index) => {
    if (target) {
      const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top + 200,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom - 200,
      };

      const windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

      if (
        targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right
      ) {
        const buttonNextPage: HTMLAnchorElement | null = document.querySelector('.next-page');
        const buttonPrevPage: HTMLAnchorElement = <HTMLAnchorElement>document.querySelector('.prev-page');
        linksElement.forEach((item) => item.classList.remove('active'));
        linksElement[index].classList.add('active');
        if (buttonPrevPage) {
          if (index === 0) buttonPrevPage.style.visibility = 'hidden';
          else {
            buttonPrevPage.href = titles[index - 1].link;
            buttonPrevPage.innerHTML = titles[index - 1].title;
            buttonPrevPage.style.visibility = 'visible';
          }
        }
        if (buttonNextPage) {
          if (index === titles.length - 1) buttonNextPage.style.visibility = 'hidden';
          else {
            buttonNextPage.href = titles[index + 1].link;
            buttonNextPage.innerHTML = titles[index + 1].title;
            buttonNextPage.style.visibility = 'visible';
          }
        }
      }
    }
  });
}
