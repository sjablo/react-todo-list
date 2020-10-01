import React, { useState, useEffect } from "react";
import { tasks as mockupTasks } from "mocks";
import { generateCrudMethods } from "utils";
import Task from "./Task";

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            methods={generateCrudMethods(setTasks, index)}
          />
        ))}
      </tbody>
    </table>
  );
};
