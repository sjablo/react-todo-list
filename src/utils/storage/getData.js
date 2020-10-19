import { tasks } from "mocks";

// TODO add parameter to getData for choosing which mocked data to include
const getData = (label) => {
  const initialData = process.env.NODE_ENV === "production" ? [] : tasks;
  const parsedData = JSON.parse(window.localStorage.getItem(label));

  // no record in local storage - produces null, return mocks or empty array
  if (!parsedData) return initialData;
  // has an empty record in local storage - produces empty array
  // TODO add guard against empty objects
  else if (!parsedData.length) return initialData;
  // has record in local storage - parse it
  else return parsedData;
};

export default getData;
