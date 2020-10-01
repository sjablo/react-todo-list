export default (stateModifier, index) => ({
  create: (newRecord) =>
    stateModifier((prevState) => [...prevState, newRecord]),
  update: (newData) =>
    stateModifier((prevState) => {
      const newState = prevState;
      newState[index] = newData;
      return newState;
    }),
  remove: () =>
    stateModifier((prevState) => prevState.filter((el, ind) => ind !== index)),
});
