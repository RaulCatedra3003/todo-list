export {updateLocalStorage};


import {customListsArray} from '../lists/list.js';


function updateLocalStorage() {
  localStorage.setItem('customLists', JSON.stringify(customListsArray));
}