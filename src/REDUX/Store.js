import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./RootReducer";

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;
