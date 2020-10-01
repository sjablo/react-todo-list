import React from "react";
import Collapsible from "./Collapsible";

export default ({
  task: { title, description, backgroundColor, textColor },
}) => (
  <tr>
    <td>{title}</td>
    <td>
      <Collapsible text={description} />
    </td>
  </tr>
);
