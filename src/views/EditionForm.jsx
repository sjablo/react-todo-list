import React, { useState, useCallback } from "react";
import { Input, Header } from "components";

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

  const handleChange = useCallback(
    (event) => {
      event.persist();
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    [setState]
  );

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
          handleChange={handleChange}
          required
        />
        <Input
          type="text"
          name="description"
          label="Description"
          value={state.description}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="backgroundColor"
          label="Background color"
          value={state.backgroundColor}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="textColor"
          label="Text color"
          value={state.textColor}
          handleChange={handleChange}
        />
        <Input type="submit" />
      </form>
    </div>
  );
};

export default EditionForm;
