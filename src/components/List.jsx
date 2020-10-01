import React, { useState } from "react";
import Task from "./Task";
import { tasks as mockupTasks } from "mocks";

export default () => {
  const [tasks, setTasks] = useState(mockupTasks);
  window.tasks = tasks;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </tbody>
    </table>
  );
};
