import React, { useState } from "react";
import Task from "./Task";
import { tasks as mockupTasks } from "mocks";

export default () => {
  const [tasks, setTasks] = useState(mockupTasks);
  window.tasks = tasks;

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};
