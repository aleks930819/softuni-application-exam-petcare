import { html } from '../utils/lib.js';
import { getAll } from '../data/data.js';

export const catalogView = (ctx) => {
  const onCatalog = async () => {
    const pets = await getAll();
    const user = ctx.user;
    ctx.render(catalogTemplate(pets, user));
  };
  onCatalog();
};

function catalogTemplate(pets, user) {
  return html`
    <section id="dashboard">
      <h2 class="dashboard-title">Services for every animal</h2>
      <div class="animals-dashboard">
        ${pets.length > 0
          ? pets.map((pet) => catalogCard(pet, user))
          : noPetsFound()}
      </div>
    </section>
  `;
}

const catalogCard = (pet, user) => html`
  <div class="animals-board">
    <article class="service-img">
      <img class="animal-image-cover" src=${pet.image} />
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
      ${user
        ? html` <a class="btn" href="/details/${pet._id}">Details</a>`
        : ''}
    </div>
  </div>
`;

const noPetsFound = () => {
  return html`
    <div>
      <p class="no-pets">No pets in dashboard</p>
    </div>
  `;
};
