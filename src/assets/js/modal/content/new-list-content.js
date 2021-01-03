export {addNewListModalContent};


import {validateListTitle} from './validations/new-list-validations.js';
import {saveNewList} from '../../lists/list.js'


const newListFomr = `
<h2 class="modal-title">New List</h2>
<form class='list-form'>
  <label for="listTitle" class='list-form__label'>List name*:</label>
  <input type="text" name="listTitle" id="listTitle" class="list-form__input">
  <fieldset class="fieldset-buttons">
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
  listTitle.addEventListener('blur', validateListTitle);
  saveButton.addEventListener('click', saveNewList);
}