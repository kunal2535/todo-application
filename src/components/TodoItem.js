import React from "react";

const TodoItem = ({ index, todo, handleEditTodo, handleDeleteTodo }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <div className="actions">
        <button
          onClick={() => handleEditTodo(index, prompt("Edit Todo", todo))}
        >
          Edit
        </button>
        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
