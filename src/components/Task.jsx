import React, { useState } from "react";
import Collapsible from "./Collapsible";
import Button from "./Button";
import Modal from "./Modal";
import EditionForm from "./EditionForm";

const Task = ({
  task,
  methods: { update, remove },
  closeModal: closeParentModal,
}) => {
  const [isModalOpen, toggleModalOpen] = useState(false);

  const { title, description, backgroundColor, textColor } = task;

  return (
    <tr style={{ backgroundColor, color: textColor }}>
      <td>{title}</td>
      <td>
        <Collapsible text={description} />
      </td>
      <td>
        <Button
          onClick={() => {
            closeParentModal();
            toggleModalOpen(true);
          }}
          text="Edit"
        />
        {isModalOpen && (
          <Modal onClose={() => toggleModalOpen(false)}>
            <EditionForm
              title="Edit task"
              handleSubmit={(data) => {
                update(data);
                toggleModalOpen(false);
              }}
              task={task}
            />
          </Modal>
        )}
        <Button onClick={remove} text="Remove" />
      </td>
    </tr>
  );
};

export default Task;
