import axios from "axios";

export const fetchData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("https://coronavirus.m.pipedream.net/");
      console.log(response.data.rawData);
      const countries = [];
      const confirmed = [];
      const deaths = [];

      for (let i = 0; i < response.data.rawData.length; i++) {
        countries.unshift(response.data.rawData[i].Combined_Key);
        confirmed.unshift(response.data.rawData[i].Confirmed);
        deaths.unshift(response.data.rawData[i].Deaths);
      }

      const globalConfirmed = response.data.summaryStats.global.confirmed;
      const globalDeaths = response.data.summaryStats.global.deaths;
      console.log(globalConfirmed, globalDeaths);
      const data = [globalConfirmed, globalDeaths];

      dispatch({
        type: "SET_COUNTRIES",
        payload: countries,
      });

      dispatch({
        type: "SET_CONFIRMED",
        payload: confirmed,
      });

      dispatch({
        type: "SET_DEATHS",
        payload: deaths,
      });

      dispatch({
        type: "SET_CHART",
        payload: data,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
