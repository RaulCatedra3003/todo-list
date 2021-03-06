export {
  validateTaskDescription,
  validateTaskTitle
};

let validationTitleAndDescription = {
  'title': false,
  'description': false
}

function validateTaskDescription(e) {
  const leters = /^[0-9a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newTaskDescription = e.target.value;
  if (newTaskDescription.match(leters) && newTaskDescription.length >= 10 && newTaskDescription.length <= 100) {
    validationTitleAndDescription.description = true;
    enabledSaveButton();
  } else {
    validationTitleAndDescription.description = false;
    e.target.value = "";
    e.target.placeholder = "Min 10 an max 100 letters";
    enabledSaveButton();
  }
}

function validateTaskTitle(e) {
  const leters = /^[0-9a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newTaskName = e.target.value;
  if (newTaskName.match(leters) && newTaskName.length >= 3 && newTaskName.length <= 25) {
    validationTitleAndDescription.title = true;
    enabledSaveButton();
  } else {
    validationTitleAndDescription.title = false;
    e.target.value = "";
    e.target.placeholder = "Min 3 an max 25 letters";
    enabledSaveButton();
  }
}

function enabledSaveButton() {
  const saveButton = document.getElementById('saveButton');
  if (validationTitleAndDescription.title && validationTitleAndDescription.description) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}