import { decorateContext } from './middlewares/decorateContext.js';

import { page, render } from './utils/lib.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { navView } from './views/navView.js';

const main = document.getElementById('content');
export const renderMain = (content) => render(content, main);

console.log('App is running... ');

page(decorateContext);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);

page.start();
