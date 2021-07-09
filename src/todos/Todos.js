import { Paper, useTheme } from "@material-ui/core";
import React from "react";
import { TodoInput } from "./TodoInput";
import TodoItemList from "./TodoItemList";

export function Todos({ todos }) {
  const theme = useTheme();

  const style = {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  };

  return (
    <Paper elevation={8} style={style}>
      <TodoInput todos={todos} />
      <TodoItemList todos={todos} />
    </Paper>
  );
}
