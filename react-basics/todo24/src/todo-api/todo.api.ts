import { TaskEventEmitter } from "../event-updater";
import { Task } from "../interfaces/task.interface";

// ! Singleton Pattern used :)
export class TodoApi {
  private todos: Task[] = [];
  private static instance: TodoApi;
  private constructor() {
    this.todos = [];
  }

  static getInstance(): TodoApi {
    if (!TodoApi.instance) {
      TodoApi.instance = new TodoApi();
    }
    return TodoApi.instance;
  }

  getTasks(): Task[] {
    return this.todos;
  }

  addTask(title: string, completed?: boolean): Task {
    const id = this.generateRandomId();
    const newTask = { id, title, completed: completed || false };
    this.todos.push(newTask);
    TaskEventEmitter.emit("update");
    return newTask;
  }

  completeTask(taskId: number) {
    const task = this.todos.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
    TaskEventEmitter.emit("update");
  }

  deleteTask(taskId: number) {
    this.todos = this.todos.filter((task) => task.id !== taskId);
    TaskEventEmitter.emit("update");
  }

  private generateRandomId() {
    return Math.floor(Math.random() * 10000);
  }
}
