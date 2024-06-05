import { BUY_COFFE } from "./CoffeActionType";

const initialState = {
  numOfCoffe: 40,
};

const CoffeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFE:
      return {
        ...state,
        numOfCoffe: state.numOfCoffe - 1,
      };

    default:
      return state;
  }
};
export default CoffeReducer;
