import menuItems from './menu.json';
import menuTemp from '../partials/menu-markup.hbs';

const menuList = document.querySelector('.js-menu');


menuList.innerHTML = menuTemp(menuItems);