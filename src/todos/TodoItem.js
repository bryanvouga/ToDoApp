import React from "react";
import {
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleDeleteClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem divider button onClick={handleTodoClick}>
      <Checkbox checked={todo.complete} />
      <ListItemText primary={todo.name} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleDeleteClick}>
          <CloseIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
