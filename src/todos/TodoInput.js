import { useTheme, Button, TextField } from "@material-ui/core";
import React from "react";

export function TodoInput({ todos }) {
  const theme = useTheme();

  const style = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  };

  return (
    <div style={style}>
      <TextField
        inputRef={todos.todoNameRef}
        label="Type something"
        variant="outlined"
        fullWidth
      />

      <Button
        onClick={todos.add}
        variant="contained"
        color="primary"
        style={{
          marginLeft: theme.spacing(1),
        }}
      >
        Add
      </Button>

      <Button
        onClick={todos.clear}
        variant="contained"
        color="primary"
        style={{
          marginLeft: theme.spacing(1),
        }}
      >
        Clear
      </Button>
    </div>
  );
}
