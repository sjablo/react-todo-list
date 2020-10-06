import React, { useState, useEffect } from "react";
import { tasks as mockupTasks } from "mocks";
import { generateCrudMethods } from "utils";
import Task from "./Task";
import Button from "./Button";
import EditionForm from "./EditionForm";
import Modal from "./Modal";

const List = () => {
  // tasks can be parsed from localStorage in the future:
  // const { localStorage } = window;
  // let i = 0;
  // const parsedTasks = []
  // while (sessionStorage.getItem(`${i}`)) {
  //  parsedTasks.push(JSON.parse(sessionStorage.getItem(`${i}`)));
  //  i++;
  // }
  const [tasks, setTasks] = useState(
    process.env.NODE_ENV === "production" ? [] : mockupTasks
  );

  const [isModalOpen, toggleModalOpen] = useState(false);

  useEffect(() => {
    window.tasks = tasks;
    // save tasks to localStorage:
    // const { localStorage } = window;
    // for (let i = 0; i < tasks.length; i++) localStorage.setItem(`${i}`, JSON.stringify(tasks[i]));
  }, [tasks]);

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
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
