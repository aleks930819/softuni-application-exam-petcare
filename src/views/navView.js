import getUserData from '../utils/getUserData.js';
import { html, render } from '../utils/lib.js';
import { logoutHandler } from '../utils/logoutHandler.js';

const parent = document.querySelector('header');

export const navView = (ctx) => {
  const user = getUserData();
  render(navTemplate(user), parent);
};

function navTemplate(user) {
  return html`
    <nav>
      <section class="logo">
        <img src="./images/logo.png" alt="logo" />
      </section>
      <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>
        ${user
          ? html`<li><a href="/create">Create Postcard</a></li>
              <li><a href="#" @click=${logoutHandler}>Logout</a></li>`
          : html`<li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>`}
      </ul>
    </nav>
  `;
}
