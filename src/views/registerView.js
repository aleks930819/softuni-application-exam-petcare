import { register } from '../data/auth.js';
import { html } from '../utils/lib.js';
import { submitHandler } from '../utils/submitHandler.js';
import { checkForEmptyField } from '../utils/validation.js';

export const registerView = (ctx) => {
  const onRegister = async ({ email, password, repeatPassword }) => {
    const inputs = [email, password];
    const isEmptyField = checkForEmptyField(inputs);

    if (isEmptyField) {
      return alert('All fields are required!');
    }

    if (password !== repeatPassword) {
      return alert(`Passwords don't match!`);
    }

    await register(email, password);

    ctx.page.redirect('/');
    ctx.navView();
  };

  ctx.render(registerTemplate(submitHandler(onRegister)));
};

function registerTemplate(submitHandler) {
  return html`
    <!--Register Page-->
    <section id="registerPage">
      <form class="registerForm" @submit=${submitHandler}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
          <label for="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="steven@abv.bg"
            value=""
          />
        </div>

        <div class="on-dark">
          <label for="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            value=""
          />
        </div>

        <div class="on-dark">
          <label for="repeatPassword">Repeat Password:</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            placeholder="********"
            value=""
          />
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
          <span>If you have profile click <a href="login">here</a></span>
        </p>
      </form>
    </section>
  `;
}
