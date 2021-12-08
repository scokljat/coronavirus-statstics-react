import { combineReducers } from "redux";
import { reducerCountry } from "./reducerCountry";
import { reducerConfirmed } from "./reducerConfirmed";
import { reducerDeaths } from "./reducerDeaths";
import reducerChart from "./reducerChart";

const rootReducer = combineReducers({
  reducerCountry: reducerCountry,
  reducerConfirmed: reducerConfirmed,
  reducerDeaths: reducerDeaths,
  reducerChart: reducerChart,
});

export default rootReducer;
