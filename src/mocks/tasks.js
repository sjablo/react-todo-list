const generateTasks = (number = 3) => {
  const taskArray = [];
  for (let i = 1; i <= number; i++) {
    taskArray.push({
      title: `Title ${i}`,
      description: `Description ${i}`,
    });
  }
  return taskArray;
};

export default generateTasks(process.env.REACT_APP_TASK_NUMBER);
