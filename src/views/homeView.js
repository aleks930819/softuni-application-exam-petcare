import { html } from '../utils/lib.js';

export const homeView = (ctx) => ctx.render(homeTemplate());

function homeTemplate() {
  return html`
    <!--Welcome Page-->
    <section class="welcome-content">
      <article class="welcome-content-text">
        <h1>We Care</h1>
        <h1 class="bold-welcome">Your Pets</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </article>
      <article class="welcome-content-image">
        <img src="./images/header-dog.png" alt="dog" />
      </article>
    </section>
  `;
}
