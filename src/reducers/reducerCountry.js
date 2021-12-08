import { ActionType } from "../actions/ActionType";
const initialState = {
  countries: [],
};

export const reducerCountry = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_COUNTRIES:
      return { ...state, countries: payload };

    default:
      return state;
  }
};
