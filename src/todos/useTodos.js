import { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";

const LOCAL_STORAGE_KEY = "todoapp";

export function useTodos() {
  const [items, setItems] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setItems(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function add(e) {
    const newToDoName = todoNameRef.current.value;

    if (newToDoName === "") {
      return;
    }

    setItems((todos) => {
      return [...todos, { id: uuid(), name: newToDoName, complete: false }];
    });

    todoNameRef.current.value = null;
  }

  function clear(e) {
    setItems((todo) => {
      return [];
    });
  }

  function toggle(id) {
    const updatedTodos = [...items];
    const updateTodo = updatedTodos.find((todo) => todo.id === id);
    updateTodo.complete = !updateTodo.complete;
    setItems(updatedTodos);
  }

  function remove(id) {
    const updateTodos = [...items];
    setItems(updateTodos.filter((todo) => todo.id !== id));
  }

  return {
    todoNameRef,
    clear,
    toggle,
    add,
    items,
    remove,
  };
}
