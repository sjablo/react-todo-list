export default (stateModifier, index) => ({
  create: (newRecord) =>
    stateModifier((prevState) => [...prevState, newRecord]),
  update: (newData) =>
    stateModifier((prevState) =>
      prevState.map((element, currentIndex) =>
        currentIndex === index ? newData : element
      )
    ),
  remove: () =>
    stateModifier((prevState) =>
      prevState.filter((element, currentIndex) => currentIndex !== index)
    ),
  reorder: (newIndex) =>
    stateModifier((prevState) => {
      if (
        newIndex >= prevState.length ||
        newIndex < 0 ||
        isNaN(Number(newIndex))
      ) {
        alert("Please provide valid place number");
        return prevState;
      }
      if (index < newIndex)
        // move element to the back
        return prevState.map((element, currentIndex, array) => {
          if (newIndex > currentIndex && currentIndex >= index)
            return array[currentIndex + 1];
          // shift the elements between index and newIndex
          else if (currentIndex === newIndex) return array[index];
          // set the element at desired index
          else return element; // part of array before index or after newIndex doesn't change
        });
      else if (index > newIndex)
        // move element to the front
        return prevState.map((element, currentIndex, array) => {
          if (newIndex < currentIndex && currentIndex <= index)
            return array[currentIndex - 1];
          // unshift the elements between newIndex and index
          else if (currentIndex === newIndex) return array[index];
          // set the element at desired index
          else return element; // part of array before newIndex or after index doesn't change
        });
      else return prevState;
    }),
});
