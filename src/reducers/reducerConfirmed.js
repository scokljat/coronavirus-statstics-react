import { ActionType } from "../actions/ActionType";
const initialState = {
  confirmed: [],
};

export const reducerConfirmed = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_CONFIRMED:
      return { ...state, confirmed: payload };

    default:
      return state;
  }
};
