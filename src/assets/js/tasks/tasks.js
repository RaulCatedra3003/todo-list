export{saveNewTask, taskArray, changeValueVariableTasks}



import { updateLocalStorage } from "../local-storage/update-local-storage";



let taskArray = [];

function saveNewTask(e){
  e.preventDefault();
  const taskTitle=document.getElementById('taskTitle').value;
  const taskDescription=document.getElementById('taskDescription').value;
  const isCompleted=document.getElementById('isCompleted').checked;
  const isImportant=document.getElementById('isImportant').checked;
  const selectedList=document.getElementById('selectedList').value;
  const taskColor=document.getElementById('taskColor').value;
  const task= new Task(taskTitle,taskDescription,isCompleted,isImportant,selectedList,taskColor);
  taskArray.push(task);
  updateLocalStorage();
}


function changeValueVariableTasks(value){
  taskArray=value;
}

class Task{
  constructor(title, description, completed, important, list, color){
    this.title=title,
    this.description=description,
    this.completed=completed,
    this.important=important,
    this.list=list,
    this.color=color
  }
}