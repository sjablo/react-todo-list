export default (stateModifier, index) => ({
  create: (newRecord) =>
    stateModifier((prevState) => [...prevState, newRecord]),
  update: (newData) =>
    stateModifier((prevState) =>
      prevState.map((element, ind) => (ind === index ? newData : element))
    ),
  remove: () =>
    stateModifier((prevState) =>
      prevState.filter((element, ind) => ind !== index)
    ),
});
