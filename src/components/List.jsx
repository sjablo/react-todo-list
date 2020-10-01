import React, { useState, useEffect } from "react";
import { tasks as mockupTasks } from "mocks";
import { generateCrudMethods } from "utils";
import Task from "./Task";
import Button from "./Button";

const List = ({ openModal }) => {
  const [tasks, setTasks] = useState(
    process.env.NODE_ENV === "production" ? [] : mockupTasks
  );
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
          <th>
            <Button onClick={openModal} text="Add new" />
          </th>
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

export default List;
