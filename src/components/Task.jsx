import React from "react";
import Collapsible from "./Collapsible";
import Button from "./Button";

const Task = ({
  task: { title, description, backgroundColor, textColor },
  methods: { update, remove },
}) => (
  <tr style={{ backgroundColor, color: textColor }}>
    <td>{title}</td>
    <td>
      <Collapsible text={description} />
    </td>
    <td>
      <Button onClick={update} text="Edit" />
      <Button onClick={remove} text="Remove" />
    </td>
  </tr>
);

export default Task;
