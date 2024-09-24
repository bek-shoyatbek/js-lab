import { TaskComponent } from "../Task/Task";
import { Task } from "../../interfaces/task.interface";
import { TodoApi } from "../../todo-api/todo.api";

const todoApi = TodoApi.getInstance();

export function TaskList({ tasks: tasks }: { tasks: Task[] }) {
  console.log(tasks);
  if (!tasks) return <p className="no_tasks">No tasks left!</p>;
  return (
    <>
      {tasks.map((task) => (
        <ul className="task_list">
          <TaskComponent task={task} />
          <button
            onClick={() => todoApi.deleteTask(task.id)}
            className="delete_button"
          >
            Delete
          </button>
        </ul>
      ))}
    </>
  );
}
