import React, { useState } from "react";
import Input from "./Input";
import Header from "./Header";

const EditionForm = ({
  task: {
    title = "",
    description = "",
    backgroundColor = "",
    textColor = "",
  } = {},
  handleSubmit = () => {},
  title: formTitle = "Provide entry data",
}) => {
  const [state, setState] = useState({
    title,
    description,
    backgroundColor,
    textColor,
  });

  return (
    <div>
      <Header text={formTitle} />
      <form
        onSubmit={(event) => {
          handleSubmit(state);
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
          multifield
        />
        <Input
          type="text"
          name="description"
          label="Description"
          value={state.description}
          handleChange={setState}
          multifield
        />
        <Input
          type="text"
          name="backgroundColor"
          label="Background color"
          value={state.backgroundColor}
          handleChange={setState}
          multifield
        />
        <Input
          type="text"
          name="textColor"
          label="Text color"
          value={state.textColor}
          handleChange={setState}
          multifield
        />
        <Input type="submit" />
      </form>
    </div>
  );
};

export default EditionForm;
