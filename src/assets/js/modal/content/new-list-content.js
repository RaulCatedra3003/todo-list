export {addNewListModalContent};


import {validateListTitle} from './validations/new-list-validations.js';
import {saveNewList} from '../../lists/list.js'
import {hiddeNewlistModal} from '../hide-modal.js'


const newListFomr = `
<h2 class="modal-title">New List</h2>
<form class='list-form'>
  <label for="listTitle" class='list-form__label list-form__item'>List name*:</label>
  <input type="text" name="listTitle" id="listTitle" class="list-form__input list-form__item">
  <fieldset class="fieldset-buttons list-form__item">
    <button class="fieldset-buttons__button" id="cancelButton">Cancel</button>
    <button class="fieldset-buttons__button" id="saveButton" disabled>Save</button>
  </fieldset>
</form>`

function addNewListModalContent() {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = '';
  modalContent.innerHTML = newListFomr;
  const listTitle = document.getElementById('listTitle');
  const saveButton = document.getElementById('saveButton');
  const cancelButton = document.getElementById('cancelButton');
  listTitle.addEventListener('blur', validateListTitle);
  saveButton.addEventListener('click', saveNewList);
  cancelButton.addEventListener('click', hiddeNewlistModal);
}
