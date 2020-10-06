import React, { useState } from "react";
import Collapsible from "./Collapsible";
import Button from "./Button";
import Modal from "./Modal";
import EditionForm from "./EditionForm";
import Input from "./Input";

const Task = ({
  index,
  task,
  methods: { update, remove, reorder },
  closeModal: closeParentModal,
}) => {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [newIndex, setNewIndex] = useState(index + 1);

  const { title, description, backgroundColor, textColor } = task;

  return (
    <tr style={{ backgroundColor, color: textColor }}>
      <td>{index + 1}</td>
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
        <Input
          type="number"
          name="newIndex"
          label="New place"
          value={newIndex}
          handleChange={setNewIndex}
        />
        <Button
          onClick={() => {
            reorder(newIndex - 1);
            setNewIndex(index + 1);
          }}
          text="Change task number"
        />
      </td>
    </tr>
  );
};

export default Task;
