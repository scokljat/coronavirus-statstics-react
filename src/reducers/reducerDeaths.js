import { ActionType } from "../actions/ActionType";

const initialState = {
  deaths: [],
};

export const reducerDeaths = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_DEATHS:
      return { ...state, deaths: payload };

    default:
      return state;
  }
};
