import List from "../Models/List.js";
import Store from "../store.js";
import store from "../store.js";
import Task from "../Models/task.js";
//Public
class ListService {
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
  addList(name) {
    let newList = new List(name);
    Store.State.lists.push(newList);
  }
  deleteList(id) {
    console.log("delete" + id);

    let index = store.State.lists.findIndex((li) => li.id == id);
    console.log(index);
    store.State.lists.splice(index, 1);
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
