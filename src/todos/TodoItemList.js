import React from "react";
import TodoItem from "./TodoItem";
import { List } from "@material-ui/core";

export default function TodoItemList({ todos }) {
  return (
    <List>
      {todos.items.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={todos.remove}
          toggleTodo={todos.toggle}
          todo={todo}
        />
      ))}
    </List>
  );
}
