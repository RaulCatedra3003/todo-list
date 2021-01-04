export {showModal};

import {removePrincipalEventListeners} from './remove-event-listeners/remove-principal-event-listeners.js';
import {addModalEventListeners} from './add-event-listeners/add-modal-event-listeners.js';
import {addNewTaskModalContent} from './content/new-task-content.js';
import {addNewListModalContent} from './content/new-list-content.js';
import {updateCurrentOpenModal} from './hide-modal.js';
import { openTaskDetailsModal } from './content/open-task-details-modal.js';
import { openListDetailsModal } from './content/open-list-detail.js';

function showModal(e) {
  const modal = document.getElementById('displayModal');
  const id = e.target.id;
  switch (id) {
    case 'newTask':
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      addNewTaskModalContent();
      updateCurrentOpenModal(id);
      break;
    case 'newList':
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      addNewListModalContent();
      updateCurrentOpenModal(id);
      break;
    case 'detailsTask':
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      openTaskDetailsModal(e.target);
      updateCurrentOpenModal(id);
      break;
    default:
      removePrincipalEventListeners();
      modal.classList.toggle("hidde");
      addModalEventListeners();
      openListDetailsModal(e.target);
      updateCurrentOpenModal("listDetails");
      break;
  }
}