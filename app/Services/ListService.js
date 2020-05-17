import List from "../Models/List.js";
import Store from "../store.js";
import store from "../store.js";
import Task from "../Models/task.js";

class ListService {
  taskDone(taskId, listId) {
    let currentList = store.State.lists.find((l) => l.id == listId);
    let tasks = currentList.tasks;
    let task = tasks.find((t) => t.id == taskId);
    task.done ? (task.done = false) : (task.done = true);
    store.saveState();
    console.log("done is: " + task.done);
  }
  deleteTask(taskId, listId) {
    let currentList = store.State.lists.find((l) => l.id == listId);
    let tasks = currentList.tasks;
    let index = tasks.findIndex((t) => t.id == taskId);
    tasks.splice(index, 1);
  }
  addTask(task) {
    let newTask = new Task(task);
    store.State.lists.find((l) => {
      if (l.id == newTask.listId) {
        l.tasks.push(newTask);
      }
    });
  }
  addList(list) {
    let newList = new List(list);
    Store.State.lists.push(newList);
  }
  deleteList(id) {
    let index = store.State.lists.findIndex((li) => li.id == id);
    console.log(index);
    store.State.lists.splice(index, 1);
  }
}

const SERVICE = new ListService();
export default SERVICE;
