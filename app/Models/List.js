import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.titleColor = data.color;
    this.name = data.name;
    this.tasks = [];
  }

  get ListTemplate() {
    return `<div class=" card shadow bg-light text-dark m-3 ">
    <div >
  <p
    onclick="app.listController.deleteList('${this.id}')"
    class="delete-list-btn text-danger shadow"
  >
    <i class="far fa-trash-alt"></i>
  </p>
  <h3 style="background-color: ${this.titleColor};" class="  rounded-bottom text-light pl-3">${this.name}</h3>
  <div>
    <div >
      ${this.taskTemplate}
    </div>
    <form
      class="pt-2 pl-2 pr-2"
      onsubmit="app.listController.addTask(event,'${this.id}')"
    >
      <div class="form-row align-items-center">
        <div class="col-auto">
          <input
            type="text"
            class="form-control mb-2 input-outline-primary"
            id="task"
            name="task"
            placeholder="New Task"
            required
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-success mb-2">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>`;
  }
  get taskTemplate() {
    let template = "";
    this.tasks.forEach((t) => {
      template += `
      <div class="d-flex justify-content-between">
      <div class="pl-2">
      <input onclick="app.listController.taskDone('${t.id}','${
        this.id
      }')" type="checkbox" ${t.done ? "checked" : ""} name="done" id="done" />
      <li class="d-inline">${t.text}</li>
      </div>
      <p onclick="app.listController.deleteTask('${t.id}','${this.id}')"
      class="delete-task text-danger d-inline  pr-3">
      <i class="far fa-trash-alt"></i>
      </p>
      </div>`;
    });
    return template;
  }
}
