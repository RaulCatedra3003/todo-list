export {
  updateLocalStorage
};


import {
  customListsArray
} from '../lists/list.js';
import {
  taskArray
} from '../tasks/tasks.js';


function updateLocalStorage() {
  localStorage.setItem('customLists', JSON.stringify(customListsArray));
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}