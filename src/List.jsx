import React from "react";

import Task from "./Task";

export default ({ tasks }) => <div>
  {tasks.map((task, index) => <Task key={index} task={task} />)}
</div>;