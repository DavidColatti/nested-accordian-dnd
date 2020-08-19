import React from "react";
import TaskList from "./components/TaskList";
import { taskList } from "./data";

const App = () => {
  return <TaskList taskList={taskList} />;
};

export default App;
