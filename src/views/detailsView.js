import { getById, deleteById } from '../data/data.js';
import { html } from '../utils/lib.js';

export const detailsView = async (ctx) => {
  const user = ctx.user;
  const petId = ctx.params.id;
  const pet = await getById(petId);

  const isOwner = user && user._id === pet._ownerId;

  const onDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete this pet?');
    if (confirmed) {
      await deleteById(petId);
      ctx.page.redirect('/');
    }
  };
  ctx.render(detailsTemplate(user, isOwner, pet, onDelete));
};

function detailsTemplate(user, isOwner, pet, onDelete) {
  return html`
    <section id="detailsPage">
      <div class="details">
        <div class="animalPic">
          <img src=${pet.image} />
        </div>
        <div>
          <div class="animalInfo">
            <h1>Name: ${pet.name}</h1>
            <h3>Breed:${pet.breed}</h3>
            <h4>Age: ${pet.age}</h4>
            <h4>Weight: ${pet.weight}</h4>
            <h4 class="donation">Donation: 0$</h4>
          </div>
          <div class="actionBtn">
            ${isOwner
              ? html`
                  <a href="/edit/${pet._id}" class="edit">Edit</a>
                  <a href="#" class="remove" @click=${onDelete}>Delete</a>
                `
              : user && !isOwner
              ? html` <a href="#" class="donate">Donate</a>`
              : ''}
          </div>
        </div>
      </div>
    </section>
  `;
}
