export { openListDetailsModal }



import { customListsArray, deleteList, updateList } from "../../lists/list";
import { hiddeListDetailsModal } from "../hide-modal";
import { validateListTitle } from "./validations/new-list-validations";




const listDetailsFomr = `
<h2 class="modal-title">Details List</h2>
<form class='list-form'>
  <label for="listTitle" class='list-form__label list-form__item'>List name*:</label>
  <input type="text" name="listTitle" id="listTitle" class="list-form__input list-form__item">
  <fieldset class="fieldset-buttons list-form__item">
    <button class="fieldset-buttons__button" id="cancelButton">Cancel</button>
    <button class="fieldset-buttons__button" id="deleteButton">Delete</button>
    <button class="fieldset-buttons__button" id="saveButton">Save</button>
  </fieldset>
</form>`

function openListDetailsModal(e) {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = '';
  modalContent.innerHTML = listDetailsFomr;
  const listTitle = document.getElementById('listTitle');
  const saveButton = document.getElementById('saveButton');
  const cancelButton = document.getElementById('cancelButton');
  const deleteButton = document.getElementById('deleteButton');
  const listObject= customListsArray.filter(listItem=>listItem.id===parseInt(e.dataset.id))[0];
  listTitle.value = listObject.title;
  listTitle.dataset.id = listObject.id;
  listTitle.addEventListener('blur', validateListTitle);
  saveButton.addEventListener('click', updateList);
  cancelButton.addEventListener('click', hiddeListDetailsModal);
  deleteButton.addEventListener('click', deleteList);
}