import ListService from "../Services/ListService.js";
import _Store from "../store.js";
function _drawLists() {
  let template = "";
  _Store.State.lists.forEach((l) => {
    template += l.ListTemplate;
  });
  document.getElementById("lists").innerHTML = template;

  _Store.saveState();
}

export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let form = event.target;
    let list = { name: form.listName.value, color: form.color.value };
    ListService.addList(list);
    _drawLists();

    event.target.reset();
  }
  deleteList(id) {
    if (window.confirm("Are you sure you want to delete your list?")) {
      ListService.deleteList(id);
      _drawLists();
    }
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
  taskDone(taskId, listId) {
    ListService.taskDone(taskId, listId);
  }
}
