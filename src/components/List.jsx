import React, { useState, useEffect } from "react";
import { tasks as mockupTasks } from "mocks";
import { generateCrudMethods } from "utils";
import Task from "./Task";
import Button from "./Button";
import EditionForm from "./EditionForm";
import Modal from "./Modal";

const List = () => {
  const [tasks, setTasks] = useState(
    process.env.NODE_ENV === "production" ? [] : mockupTasks
  );

  const [isModalOpen, toggleModalOpen] = useState(false);

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
            <Button onClick={() => toggleModalOpen(true)} text="Add new" />
            {isModalOpen && (
              <Modal onClose={() => toggleModalOpen(false)}>
                <EditionForm
                  title="Add new task"
                  handleSubmit={(data) => {
                    generateCrudMethods(setTasks).create(data);
                    toggleModalOpen(false);
                  }}
                />
              </Modal>
            )}
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
