import { Container, useTheme } from "@material-ui/core";
import React from "react";
import { useTodos, Todos } from "./todos";

function App() {
  const todos = useTodos();
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
      <Todos todos={todos} />
    </Container>
  );
}

export default App;
