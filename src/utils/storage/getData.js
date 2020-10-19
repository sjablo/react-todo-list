import { tasks } from "mocks";

// TODO add parameter to getData for choosing which mocked data to include
const getData = (label) =>
  JSON.parse(window.localStorage.getItem(label)) ||
  process.env.NODE_ENV === "production"
    ? []
    : tasks;

export default getData;
