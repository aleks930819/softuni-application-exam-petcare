import { html } from '../utils/lib.js';
import { getById, editById } from '../data/data.js';
import { checkForEmptyField } from '../utils/validation.js';
import { submitHandler } from '../utils/submitHandler.js';

export const editView = async (ctx) => {
  const petId = ctx.params.id;
  const petInfo = await getById(petId);

  const onEdit = async ({ name, breed, age, weight, image }) => {
    const input = [name, breed, age, weight, image];
    const isEmptyField = checkForEmptyField(input);

    if (isEmptyField) {
      return alert('All fields are required!');
    }
    const pet = {
      name,
      breed,
      age,
      weight,
      image,
    };
    await editById(petId, pet);
    ctx.page.redirect(`/details/${petId}`);
  };
  ctx.render(editTempalte(petInfo, submitHandler(onEdit)));
};

function editTempalte(petInfo, onSubmit) {
  return html` <section id="editPage">
    <form class="editForm" @submit=${onSubmit}>
      <img src="./images/editpage-dog.jpg" />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" value=${petInfo.name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" value=${petInfo.breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" value=${petInfo.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input
            name="weight"
            id="weight"
            type="text"
            value=${petInfo.weight}
          />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" value=${petInfo.image} />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>`;
}
