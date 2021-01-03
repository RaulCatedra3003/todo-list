export {removePrincipalEventListeners};


import {showResponsiveMenu} from '../../responsive-menu/responsive-menu.js';
import {showModal} from '../show-modal.js';
import {filterByCustomList} from '../../lists/filters.js';


function removePrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  const navListButtons = document.querySelectorAll('.nav-list__button');
  hamburguerButton.removeEventListener("click", showResponsiveMenu);
  newTask.removeEventListener('click', showModal);
  newList.removeEventListener('click', showModal);
  navListButtons.forEach(e => {
    e.removeEventListener('click', filterByCustomList);
  })
}