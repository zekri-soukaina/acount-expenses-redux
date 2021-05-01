import { combineReducers, createStore } from "redux";
import accountReducer from "./account/reducer";
import expensesReducer from "./expenses/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    account: accountReducer,
    expenses: expensesReducer,
  }),
  enhancer
);
export default store;
