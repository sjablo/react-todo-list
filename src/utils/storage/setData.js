const setData = (label, data) =>
  window.localStorage.setItem(label, JSON.stringify(data));

export default setData;
