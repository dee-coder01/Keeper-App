const reducer = (state, action) => {
  switch (action.type) {
    case "toggleFocus":
      return {
        focusElement: !state.focusElement,
      };
    case "toggleFaborite":
      return {
        focusElement: state.focusElement,
      };
    default:
      console.log("fir se");
  }
};
export default reducer;
