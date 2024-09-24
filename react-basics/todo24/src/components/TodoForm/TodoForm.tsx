import React from "react";
import "./TodoForm.module.css";
import { TodoApi } from "../../todo-api/todo.api";
import { TaskEventEmitter } from "../../event-updater";
import { TaskEvents } from "../../constants/task-events";

const todoApi = TodoApi.getInstance();

export function TodoForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function addTodo(event: React.FormEvent) {
    event.preventDefault();
    if (inputRef.current) {
      const title = inputRef.current.value;
      todoApi.addTask(title);
      inputRef.current.value = "";
      TaskEventEmitter.emit(TaskEvents.taskAdded);
    }
  }

  return (
    <>
      <form className="form">
        <input type="text" className="input" ref={inputRef} />
        <button className="add_button" onClick={addTodo}>
          Add
        </button>
      </form>
    </>
  );
}
