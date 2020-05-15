import ListService from "../Services/ListService.js";
import _Store from "../store.js";

function _drawLists() {
  let template = "";
  _Store.State.lists.forEach((l) => (template += l.ListTemplate));
  document.getElementById("lists").innerHTML = template;
  _Store.saveState();
}

export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let name = { name: event.target.listName.value };
    ListService.addList(name);
    _drawLists();
    event.target.reset();
  }
  deleteList(id) {
    ListService.deleteList(id);
    _drawLists();
  }
  addTask(event, id) {
    event.preventDefault();
    let task = { text: event.target.task.value, listId: id };
    ListService.addTask(task);
    event.target.reset();
    _drawLists();
  }
  deleteTask(taskId, listId) {
    ListService.deleteTask(taskId, listId);
    _drawLists();
  }
}
