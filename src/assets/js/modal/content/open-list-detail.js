






const listDetailsFomr = `
<h2 class="modal-title">Details List</h2>
<form class='list-form'>
  <label for="listTitle" class='list-form__label list-form__item'>List name*:</label>
  <input type="text" name="listTitle" id="listTitle" class="list-form__input list-form__item">
  <fieldset class="fieldset-buttons list-form__item">
    <button class="fieldset-buttons__button" id="cancelButton">Cancel</button>
    <button class="fieldset-buttons__button" id="deleteButton">Delete</button>
    <button class="fieldset-buttons__button" id="saveButton" disabled>Save</button>
  </fieldset>
</form>`

function openListDetailsModal() {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = '';
  modalContent.innerHTML = listDetailsFomr;
  const listTitle = document.getElementById('listTitle');
  const saveButton = document.getElementById('saveButton');
  const cancelButton = document.getElementById('cancelButton');
  const deleteButton = document.getElementById('deleteButton');
  listTitle.addEventListener('blur', validateListTitle);
  saveButton.addEventListener('click', updateList);//todo hacer en list
  cancelButton.addEventListener('click', hiddeListDetailsModal);//todo hacer en hide-modal
  deleteButton.addEventListener('click', deleteList);//todo hacer en list
}