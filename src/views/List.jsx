import React, { useState, useEffect } from "react";
import { tasks as mockupTasks } from "mocks";
import { generateCrudMethods /*, getData, setData*/ } from "utils";
import { Button, Modal } from "components";
import EditionForm from "./EditionForm";
import Task from "./Task";

const List = () => {
  // tasks can be parsed from localStorage in the future:
  // const [tasks, setTasks] = useState(getData());

  const [tasks, setTasks] = useState(
    process.env.NODE_ENV === "production" ? [] : mockupTasks // TODO: move mockup logic outside of component
  );

  const [isModalOpen, toggleModalOpen] = useState(false);

  useEffect(() => {
    // export tasks to global window object (accessible via console) after every state change
    window.tasks = tasks;

    // save tasks to localStorage after every state change:
    // setData(tasks);
  }, [tasks]);

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Description</th>
          <th>
            <span>Actions</span>
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
            index={index}
            key={index}
            task={task}
            methods={generateCrudMethods(setTasks, index)}
            closeModal={() => toggleModalOpen(false)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default List;
