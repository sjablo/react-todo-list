import React from "react";

export default ({ task: { title, description } }) => (
  <tr>
    <td>{title}</td>
    <td>{description}</td>
  </tr>
);
