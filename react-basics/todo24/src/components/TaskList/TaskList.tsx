import { TaskComponent } from "../Task/Task";
import { Task } from "../../interfaces/task.interface";
import { TodoApi } from "../../todo-api/todo.api";
import "./TaskList.css";

const todoApi = TodoApi.getInstance();

export function TaskList({ tasks: tasks }: { tasks: Task[] }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="no-tasks-container">
        <p className="no-tasks-message">No tasks left!</p>
      </div>
    );
  }

  const allTasksCompleted = tasks.every((task) => task.completed);
  if (allTasksCompleted) {
    return (
      <div className="no-tasks-container">
        <p className="no-tasks-message">All tasks completed!</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <TaskComponent task={task} />
          <button
            onClick={() => todoApi.deleteTask(task.id)}
            className="delete-button"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
