export default function reducer(state = [], action) {
  switch (action.type) {
    case "SET_NEWS":
      state = [...action.payload];
      break;
    default:
      break;
  }
  return state;
}
