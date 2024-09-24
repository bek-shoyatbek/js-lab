import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoApi } from "./todo-api/todo.api";
import { TaskList } from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
import { TaskEventEmitter } from "./event-updater";
import { Task } from "./interfaces/task.interface";

const todoApi = TodoApi.getInstance();

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    TaskEventEmitter.on("update", () => {
      setTasks((_tasks) => [...todoApi.getTasks()]);
    });
  }, [tasks]);

  return (
    <>
      <h1 className="title">Todo 24</h1>
      <TodoForm />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
