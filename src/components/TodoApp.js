import React, { useState, useCallback, useMemo } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const handleDeleteTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  const handleEditTodo = useCallback((index, newValue) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = newValue;
      return newTodos;
    });
  }, []);

  const todoList = useMemo(() => {
    return (
      <TodoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    );
  }, [todos, handleEditTodo, handleDeleteTodo]);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoForm handleAddTodo={handleAddTodo} />
      {todoList}
    </div>
  );
};

export default TodoApp;
