const setData = (data) => {
  const { localStorage } = window;

  // clear existing data
  localStorage.clear();

  // save data to localStorage
  for (let i = 0; i < data.length; i++)
    localStorage.setItem(`${i}`, JSON.stringify(data[i]));
};

export default setData;
