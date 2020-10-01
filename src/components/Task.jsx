import React from "react";
import Collapsible from "./Collapsible";
import Button from "./Button";

export default ({
  task: { title, description, backgroundColor, textColor },
  methods: { create, update, remove },
}) => (
  <tr style={{ backgroundColor, color: textColor }}>
    <td>{title}</td>
    <td>
      <Collapsible text={description} />
    </td>
    <td>
      <Button onClick={remove} text="Remove" />
    </td>
  </tr>
);
