import React from "react";
import { TodoApi } from "../../todo-api/todo.api";
import "./TodoForm.css";

const todoApi = TodoApi.getInstance();

export function TodoForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function addTodo(event: React.FormEvent) {
    event.preventDefault();
    if (inputRef.current) {
      const title = inputRef.current.value;
      todoApi.addTask(title);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          ref={inputRef}
          className="todo-input"
          placeholder="Add a new task"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
    </div>
  );
}
