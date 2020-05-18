import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.titleColor = data.color;
    this.name = data.name;
    this.tasks = [];
  }

  get ListTemplate() {
    let template = "";
    template += `<div class=" card shadow bg-dark text-light  mt-4 ml-1 mr-1 PL-1 PR-1 ">
    <div >
  <p 
    onclick="app.listController.deleteList('${this.id}')"
    class="delete-list-btn text-danger"
  >
    <i class="far fa-trash-alt"></i>
  </p>
  <h3 style="background-color: ${this.titleColor};" class=" text-light pl-2">${this.name}</h3>
  <div>
    <div>
    
    ${this.taskTemplate}
    
    </div>
    <form
      class="pt-2 pl-2 pr-2 "
      onsubmit="app.listController.addTask(event,'${this.id}')"
    >
      <div class="form-row ">
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

    return template;
  }
  get taskTemplate() {
    let template = "";
    this.tasks.forEach((t) => {
      template += `<div
class="d-flex justify-content-between
 s-card bg-light text-dark ml-2 mt-3 mr-2">

   <div class="p-1 m-1"> 
      <input 
      onclick="app.listController.taskDone('${t.id}','${this.id}')" 
      type="checkbox"
      ${t.done ? "checked" : ""} 
      name ="done" id="done" />
      </div>

    <div class="p-1 m-1">
      <p>${t.text}</p>
    </div>
    <div
      class="p-1 m-1 text-danger">
      <p onclick="app.listController.deleteTask('${t.id}','${this.id}')">
        <i class="delete-task far fa-trash-alt"></i>
      </p>
    </div>
</div>
`;
    });

    return template;
  }
}
