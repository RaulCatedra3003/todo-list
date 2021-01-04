export {
  validateListTitle
};


function validateListTitle(e) {
  const leters = /^[0-9a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newListName = e.target.value;
  const saveButton = document.getElementById('saveButton');
  if (newListName.match(leters) && newListName.length >= 3 && newListName.length <= 15) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
    e.target.value = "";
    e.target.placeholder = "Min 3 an max 15 letters";
  }
}