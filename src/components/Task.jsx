import React from "react";

export default ({ task: { title, description } }) => (
  <div>
    <span>{title}</span>
    <span>{description}</span>
  </div>
);
