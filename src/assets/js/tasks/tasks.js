export{saveNewTask, taskArray, changeValueVariableTasks, updateTaskList}



import { updateLocalStorage } from "../local-storage/update-local-storage";
import { hidde } from "../modal/hide-modal";



let taskArray = [];

function saveNewTask(e){
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const isCompleted = document.getElementById('isCompleted').checked;
  const isImportant = document.getElementById('isImportant').checked;
  const selectedList = document.getElementById('selectedList').value;
  const taskColor = document.getElementById('taskColor').value;
  const task = new Task(taskTitle,taskDescription,isCompleted,isImportant,selectedList,taskColor);
  taskArray.push(task);
  updateLocalStorage();
  updateTaskList();
  hidde('newTask');
}

function changeValueVariableTasks(value){
  taskArray=value;
}

function updateTaskList(listName = "Tasks") {
  const displayTask = document.getElementById('displayTask');
  displayTask.innerHTML = `<h1 id="displayTaskTitle" class="display-task__title">${listName}:</h1>`;
  switch (listName) {
    case "Tasks":
      taskArray.forEach(e => {
        if(!e.completed) {
          const html = e.html;
          displayTask.innerHTML += html;
        }
      })
      break;
    case 'Important':
      taskArray.forEach(e => {
        if(e.important) {
          const html = e.html;
          displayTask.innerHTML += html;
        }
      })
      break;
    case "Completed":
      taskArray.forEach(e => {
        if(e.completed) {
          const html = e.html;
          displayTask.innerHTML += html;
        }
      })
    default:
      taskArray.forEach(e => {
        if(e.list === listName) {
          const html = e.html;
          displayTask.innerHTML += html;
        }
      })
  }
}

class Task {
  constructor(title, description, completed, important, list, color) {
    this.title = title,
    this.description = description,
    this.completed = completed,
    this.important = important,
    this.list = list,
    this.color = color,
    this.html = this.createHtml()
  }
  createHtml() {
    if(this.important) {
      const html = `
      <section class="task-item">
        <input type="checkbox" class="task-item__button task-item__button-completed" checked="${completed}">
        <p class="task-item__title ${this.color}">${this.title}</p>
        <button class="task-item__button task-item__button-important bx bxs-flag-alt red-flag"></button>
      </section>`
      return html;
    } else {
      const html = `
      <section class="task-item">
        <input type="checkbox" class="task-item__button task-item__button-completed" checked="${completed}">
        <p class="task-item__title ${this.color}">${this.title}</p>
        <button class="task-item__button task-item__button-important bx bxs-flag-alt"></button>
      </section>`
      return html;
    }
  }
}