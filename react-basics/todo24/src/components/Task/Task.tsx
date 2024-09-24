import { Task } from "../../interfaces/task.interface";
import { TodoApi } from "../../todo-api/todo.api";
import "./Task.css";

const todoApi = TodoApi.getInstance();

export function TaskComponent({ task }: { task: Task }) {
  return (
    <div className="task-container">
      <div className="task-checkbox-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            todoApi.completeTask(task.id);
          }}
          className="task-checkbox"
        />
      </div>
      <div
        className={`task-title ${task.completed ? "completed" : ""}`}
        onClick={() => todoApi.completeTask(task.id)}
      >
        {task.title}
      </div>
    </div>
  );
}
