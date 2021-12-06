import { ActionType } from "./ActionType";
const initialState = {
  posts: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_POST:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
