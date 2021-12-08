import { combineReducers } from "redux";
import { reducerCountry } from "./reducerCountry";
import { reducerConfirmed } from "./reducerConfirmed";
import { reducerDeaths } from "./reducerDeaths";
const rootReducer = combineReducers({
  reducerCountry: reducerCountry,
  reducerConfirmed: reducerConfirmed,
  reducerDeaths: reducerDeaths,
});

export default rootReducer;
