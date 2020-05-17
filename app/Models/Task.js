import { generateId } from "../utils.js";

export default class Task {
  constructor(data) {
    this.id = generateId();
    this.text = data.text;
    this.listId = data.listId;
    this.done = data.done;
  }
}
