export {removePrincipalEventListeners};


import {showResponsiveMenu} from '../../responsive-menu/responsive-menu.js';
import {showModal} from '../show-modal.js';


function removePrincipalEventListeners() {
  const hamburguerButton = document.getElementById('menuOpen');
  const newTask = document.getElementById('newTask');
  const newList = document.getElementById('newList');
  hamburguerButton.removeEventListener("click", showResponsiveMenu);
  newTask.removeEventListener('click', showModal);
  newList.removeEventListener('click', showModal);
}