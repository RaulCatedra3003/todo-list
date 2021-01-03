export {updateVariableFromLocalStorage}


import {customListsArray, changeValueVariableCustomListArray} from '../lists/list.js';
import {changeValueVariableTasks, taskArray} from '../tasks/tasks.js';


function updateVariableFromLocalStorage() {
  if(localStorage.getItem('customLists') === null) {
      let objectString = JSON.stringify(customListsArray);
      localStorage.setItem('customLists', objectString);
  } else {
    changeValueVariableCustomListArray(JSON.parse(localStorage.getItem('customLists')));
  }
  if(localStorage.getItem('task') === null) {
    let objectString = JSON.stringify(taskArray);
    localStorage.setItem('task', objectString);
} else {
  changeValueVariableTasks(JSON.parse(localStorage.getItem('task')));
}
}