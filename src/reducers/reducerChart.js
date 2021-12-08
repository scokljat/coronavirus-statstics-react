import { ActionType } from "../actions/ActionType";
const initialState = {
  data: {
    labels: ["Confirmed", "Deaths"],
    datasets: [
      {
        data: [],
        backgroundColor: ["#F3950D", "#CD1818"],
      },
    ],
  },
};
const reducerChart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_CHART:
      return {
        ...state,
        data: {
          labels: ["Confirmed", "Deaths"],
          datasets: [
            {
              data: payload,
              backgroundColor: ["#F3950D", "#CD1818"],
            },
          ],
        },
      };

    default:
      return state;
  }
};

export default reducerChart;
