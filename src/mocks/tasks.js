const generateTasks = (number) => {
  const taskArray = [];
  for (let i = 1; i <= number; i++) {
    taskArray.push({
      title: `Title ${i}`,
      description: `Description ${i}`,
    });
  }
  return taskArray;
};

export default generateTasks(process.env.REACT_APP_MOCKED_TASK_NUMBER);
