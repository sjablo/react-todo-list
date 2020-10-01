import React, { useState } from "react";
import Input from "./Input";

const EditionForm = ({
  task: {
    title = "",
    description = "",
    backgroundColor = "",
    textColor = "",
  } = {},
  handleSubmit = () => {},
}) => {
  const [state, setState] = useState({
    title,
    description,
    backgroundColor,
    textColor,
  });

  return (
    <form
      onSubmit={(event) => {
        handleSubmit({ title, description, backgroundColor, textColor });
        event.preventDefault();
      }}
    >
      <Input
        type="text"
        name="title"
        label="Title"
        value={state.title}
        handleChange={setState}
        required
      />
      <Input
        type="text"
        name="description"
        label="Description"
        value={state.description}
        handleChange={setState}
      />
      <Input
        type="text"
        name="backgroundColor"
        label="Background color"
        value={state.backgroundColor}
        handleChange={setState}
      />
      <Input
        type="text"
        name="textColor"
        label="Text color"
        value={state.textColor}
        handleChange={setState}
      />
      <Input type="submit" />
    </form>
  );
};

export default EditionForm;
