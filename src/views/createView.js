import { create } from '../data/data.js';
import { checkForEmptyField } from '../utils/validation.js';
import { html } from '../utils/lib.js';
import { submitHandler } from '../utils/submitHandler.js';

export const createView = (ctx) => {
  const onCreate = async ({ name, breed, age, weight, image }) => {
    const inputs = [name, breed, age, weight, image];
    const isEmptyField = checkForEmptyField(inputs);

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

    await create(pet);
    ctx.page.redirect('/');
  };

  ctx.render(createTemplate(submitHandler(onCreate)));
};

function createTemplate(onSubmit) {
  return html` <section id="createPage">
    <form class="createForm" @submit=${onSubmit}>
      <img src="./images/cat-create.jpg" />
      <div>
        <h2>Create PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" placeholder="Max" />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" placeholder="2 years" />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" placeholder="5kg" />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input
            name="image"
            id="image"
            type="text"
            placeholder="./image/dog.jpeg"
          />
        </div>
        <button class="btn" type="submit">Create Pet</button>
      </div>
    </form>
  </section>`;
}
