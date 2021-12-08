import { combineReducers } from "redux";
import { reducerCountry } from "./reducerCountry";
import { reducerConfirmed } from "./reducerConfirmed";

const rootReducer = combineReducers({
  reducerCountry: reducerCountry,
  reducerConfirmed: reducerConfirmed,
});

export default rootReducer;
