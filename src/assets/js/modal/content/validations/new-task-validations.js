export {
  validateTaskDescription,
  validateTaskTitle
};

let validationTitleAndDescription = {
  'title': false,
  'description': false
}

function validateTaskDescription(e) {
  const leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newTaskDescription = e.target.value;
  if (newTaskDescription.match(leters) && newTaskDescription.length >= 10 && newTaskDescription.length <= 100) {
    validationTitleAndDescription.description = true;
    enabledSaveButton();
  } else {
    validationTitleAndDescription.description = false;
    enabledSaveButton();
  }
}

function validateTaskTitle(e) {
  const leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newTaskName = e.target.value;
  if (newTaskName.match(leters) && newTaskName.length >= 3 && newTaskName.length <= 25) {
    validationTitleAndDescription.title = true;
    enabledSaveButton();
  } else {
    validationTitleAndDescription.title = false;
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