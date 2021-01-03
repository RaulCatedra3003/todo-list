export {validateListTitle};


function validateListTitle(e) {
  const leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const newListName = e.target.value;
  const saveButton = document.getElementById('saveButton');
  if(newListName.match(leters) && newListName.length >= 3) {
    saveButton.disabled = false;
  }
}