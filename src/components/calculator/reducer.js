const initialState = {
  num1: "",
  num2: "",
  sol: ""
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "CHANGE":
      action.name === "num1"
        ? (newState.num1 = action.val)
        : (newState.num2 = action.val);
      break;
    case "COMP":
      if (newState.num1 === "" || newState.num2 === "") {
        alert("Please enter both numbers.");
      }
      else {
        switch (action.name) {
          case 'sum':
            newState.sol = Number(newState.num1) + Number(newState.num2);
            break;
          case "sub":
            newState.sol = Number(newState.num1) - Number(newState.num2);
            break;
          case "mul":
            newState.sol = Number(newState.num1) * Number(newState.num2);
            break;
          case "div":
            newState.sol = Number(newState.num1) / Number(newState.num2);
            break;
        }
        newState.num1 = ''
        newState.num2 = ''
      }
    default:
      return newState;
  }
  return newState;
};
export default reducer;