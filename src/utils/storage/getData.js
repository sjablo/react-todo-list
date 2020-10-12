import { tasks } from "mocks";

const getData = () => {
  const { localStorage } = window;
  // TODO add parameter to getData for choosing which mocked data to include
  const parsedData = process.env.NODE_ENV === "production" ? [] : tasks;

  for (let i = 0; i < localStorage.length; i++)
    parsedData.push(JSON.parse(localStorage.getItem(`${i}`)));

  return parsedData;
};

export default getData;
