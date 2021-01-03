export {showModal};

import {removePrincipalEventListeners} from './remove-event-listeners/remove-principal-event-listeners.js';
import {addModalEventListeners} from './add-event-listeners/add-modal-event-listeners.js';
import {addNewTaskModalContent} from './content/new-task-content.js';
import {addNewListModalContent} from './content/new-list-content.js';

function showModal(e) {
  const modal = document.getElementById('displayModal');
  const id = e.target.id;
  switch (id) {
    case 'newTask':
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      addNewTaskModalContent();
      break;
    case 'newList':
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      addNewListModalContent();
      break;
    default:
      break;
  }
}