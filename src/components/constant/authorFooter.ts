/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable max-len */
import { authors } from './authorInfo';

const generateLinks = authors
  .map(
    (item): string => `
    <li class="footer-item">
      <a class="footer-link" href="https://github.com/${item.github}">${item.name}</a>
    </li>`
  )
  .join('');

export const authorsFooter = `<div class="footer-container">
<div class="footer-list">
    <a class="footer-link" href="https://rs.school/">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="242" viewBox="0 0 242 90">
        <title>rss</title>
        <path style="fill: #fdfdfd;}" d="M137.197 3.257c-6.927 1.609-10.367 5.259-10.401 11.036-0.039 6.727 3.729 9.816 15.812 12.966 5.873 1.53 7.869 4.182 5.091 6.758-3.153 2.922-9.323 1.027-10.1-3.105-0.385-2.062-0.366-2.056-6.837-1.696l-5.735 0.318 0.276 1.806c0.425 2.784 2.722 7.082 4.68 8.758 5.802 4.964 21.78 4.455 27.25-0.872l1.6-1.558 0.307 1.811c1.125 6.663 7.892 12.923 15.677 14.504l2.5 0.509-1.477 1.935c-4.874 6.384-5.012 19.44-0.276 26.221 7.248 10.375 27.644 10.074 34.355-0.506l1.249-1.969v9.391h31.61v-10.097h-18.878v-29.416h-12.732l-0.025 4.5c-0.022 3.676-0.121 4.343-0.548 3.642-2.419-3.968-7.13-7.265-11.748-8.218l-2.489-0.515 2.526-1.898c7.858-5.906 12.752-16.681 11.495-25.307-3.305-22.669-35.958-23.020-48.395-0.523-0.802 1.448-1.485 2.68-1.519 2.737s-1.153-0.956-2.489-2.247c-2.77-2.683-4.995-3.665-12.558-5.538-7.037-1.744-8.477-2.967-6.112-5.192 2.25-2.115 7.149-0.745 8.252 2.309 0.647 1.789 0.529 1.772 8.010 1.277l4.326-0.287-0.276-1.724c-1.277-7.987-11.329-12.386-22.424-9.807zM2.635 23.268v19.755h12.732v-15.806h1.294c2.042 0 3.277 1.502 7.214 8.781l3.682 6.803 7.079 0.121c3.893 0.067 7.076 0.003 7.076-0.141 0-2.225-7.934-15.064-10.136-16.402l-1.207-0.734 2.436-1.274c9.031-4.728 7.321-18.273-2.576-20.396-1.249-0.267-7.574-0.467-14.884-0.467h-12.71v19.755zM195.401 6.952c19.87 5.186 18.051 33.064-2.824 43.242-21.268 10.37-40.222-6.654-30.113-27.045 5.898-11.897 20.984-19.316 32.934-16.194zM24.14 12.417c4.472 2.261 1.505 6.435-4.829 6.795l-3.943 0.225v-7.585l3.842 0.006c2.199 0.003 4.306 0.242 4.93 0.557zM188.373 15.91c-3.496 0.928-7.051 4.461-7.054 7.009-0.006 4.163 3.322 5.664 8.558 3.862 3.203-1.102 4.019-1.102 4.612 0.003 1.004 1.879-2.287 3.794-4.207 2.447-0.965-0.675-4.523 1.454-4.559 2.728-0.056 1.918 4.798 2.644 7.771 1.162 9.442-4.705 6.761-14.805-3.032-11.427-3.915 1.35-4.756 1.409-4.756 0.323 0-1.704 2.663-2.936 3.825-1.775 0.475 0.475 4.075-1.912 4.075-2.703 0-1.181-3.189-2.177-5.237-1.631zM174.201 25.383c-2.095 1.516-2.194 1.122 1.648 6.576 2.365 3.355 3.274 5.012 3.184 5.797-0.157 1.342-1.662 1.699-2.72 0.644-0.672-0.672-0.847-0.619-2.438 0.745-4.019 3.443 2.090 6.398 6.629 3.209 4.987-3.504 4.995-5.678 0.037-12.918-3.845-5.617-4.022-5.729-6.342-4.050zM13.044 49.621c-7.183 1.133-11.388 5.333-11.444 11.43-0.056 6.221 3.977 9.765 13.967 12.265 6.123 1.533 8.139 2.703 8.139 4.719 0 5.678-10.164 5.11-11.239-0.627-0.377-2.002-0.329-1.991-6.812-1.64l-5.749 0.312 0.287 1.8c1.311 8.252 6.109 11.686 16.799 12.021 8.477 0.264 11.391-0.557 15.092-4.258l2.534-2.534 0.931 1.257c5.386 7.284 23.58 7.774 29.554 0.793 1.747-2.039 3.707-5.881 3.907-7.65 0.141-1.246 0.101-1.268-5.223-2.883l-5.363-1.628-0.72 2.166c-2.453 7.383-11.714 7.467-13.748 0.127-0.692-2.495-0.608-8.454 0.157-11.022 1.845-6.207 9.638-7.481 12.8-2.090 1.319 2.25 0.965 2.208 6.95 0.855 5.698-1.288 5.453-1.060 4.154-3.859-5.153-11.087-22.475-13.688-31.66-4.759l-2.562 2.492-1.063-1.814c-2.649-4.523-11.005-6.846-19.682-5.473zM134.342 49.632c-4.863 0.844-9.667 3.904-12.381 7.883-0.726 1.066-0.745 0.979-0.768-3.187l-0.023-4.281h-12.732v13.61h-12.732v-13.61h-12.732v39.513h12.732v-15.806h12.732v15.806h12.732v-8.933l1.375 2.073c5.721 8.634 23.414 10.15 31.466 2.694 9.318-8.626 7.49-28.249-3.136-33.671-4.101-2.093-11.298-3.004-16.535-2.095zM20.183 57.727c0.734 0.38 1.595 1.409 2.062 2.467l0.802 1.817 8.578-0.413-0.281 2.239c-0.371 2.962-0.537 3.074-2.998 1.986-1.159-0.512-4.402-1.505-7.211-2.211-6.646-1.665-7.473-2.022-7.813-3.375-0.63-2.503 3.766-4.112 6.865-2.509zM141.871 59.279c6.502 1.806 7.819 16.729 1.789 20.278-4.503 2.649-10.201 0.394-11.537-4.57-2.655-9.863 2.264-17.786 9.748-15.708zM194.951 59.268c7.554 2.098 7.4 19.074-0.191 21.119-6.103 1.642-10.164-2.599-10.133-10.581 0.034-8.294 3.963-12.305 10.325-10.536z"></path>
      </svg>
    </a>
</div>
<ul class="footer-list authors">
  ${generateLinks}
</ul>
<div class="footer-list">
    <p class="footer-item">
      2022
    </p>
</div>
</div>`;
