import List from "./Models/List.js";
import Task from "./Models/Task.js";

let _state = {
  /** @type {List[]} */
  lists: [],
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists.forEach((list, index) => {
      let tasks = [];
      let color = list.titleColor;
      list.tasks.forEach((task, i) => {
        let done = task.done;
        tasks.push(new Task(task));
        tasks[i].done = done;
        console.log(tasks[i]);
      });
      _state.lists.push(new List(list));
      _state.lists[index].tasks = tasks;
      _state.lists[index].titleColor = color;
    });
    // data.lists = data.lists.map((l) => new List(l));
    // _state = data;
  }
}
_loadState();

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}
const store = new Store();
export default store;
