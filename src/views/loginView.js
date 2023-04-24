import { html } from '../utils/lib.js';
import { submitHandler } from '../utils/submitHandler.js';
import { login } from '../data/auth.js';
import { checkForEmptyField } from '../utils/validation.js';

export const loginView = (ctx) => {
  const onLogin = async ({ email, password }) => {
    const inputs = [email, password];
    const isEmptyField = checkForEmptyField(inputs);

    if (isEmptyField) {
      return alert('All fields are required!');
    }

    await login(email, password);
    ctx.page.redirect('/');
    ctx.navView();
  };

  ctx.render(loginTemplate(submitHandler(onLogin)));
};

function loginTemplate(submitHandler) {
  return html`
    <!--Login Page-->
    <section id="loginPage">
      <form class="loginForm" @submit=${submitHandler}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
          <label for="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
            value=""
          />
        </div>

        <div>
          <label for="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value=""
          />
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
          <span
            >If you don't have profile click <a href="/register">here</a></span
          >
        </p>
      </form>
    </section>
  `;
}
