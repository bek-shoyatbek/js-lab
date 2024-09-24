import { Task } from "../../interfaces/task.interface";
import { TodoApi } from "../../todo-api/todo.api";

const todoApi = TodoApi.getInstance();

export function TaskComponent({ task }: { task: Task }) {
  return (
    <div className="task_list_item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => {
          task.completed = !task.completed;
        }}
      />
      {task.title}
      <li
        key={task.id}
        className={task.completed ? "completed" : ""}
        onClick={() => todoApi.completeTask(task.id)}
      >
        {task.title}
      </li>
    </div>
  );
}
