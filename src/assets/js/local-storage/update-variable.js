export {updateVariableFromLocalStorage}


import {customListsArray} from '../lists/list.js';


function updateVariableFromLocalStorage() {
  if(localStorage.getItem('customLists') === null) {
      let objectString = JSON.stringify(customListsArray);
      localStorage.setItem('customLists', objectString);
  } else {
    const manolo = JSON.parse(localStorage.getItem('customLists'));
    console.log(manolo);
    console.log(customListsArray);
    customListsArray = undefined;
    customListsArray = manolo;
    console.log(customListsArray);
    /* customListsArray = manolo; */
  }
}