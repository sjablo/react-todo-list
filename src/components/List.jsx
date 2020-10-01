import React, { useState, useEffect } from "react";
import Task from "./Task";
import { tasks as mockupTasks } from "mocks";

export default () => {
  const [tasks, setTasks] = useState(mockupTasks);
  useEffect(() => {
    window.tasks = tasks;
  }, [tasks]);

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
