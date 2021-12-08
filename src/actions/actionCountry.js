import axios from "axios";

export const fetchCountry = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("https://coronavirus.m.pipedream.net/");
      console.log(response.data.rawData);
      const countries = [];
      const confirmed = [];
      for (let i = 0; i < response.data.rawData.length; i++) {
        countries.unshift(response.data.rawData[i].Country_Region);
        confirmed.unshift(response.data.rawData[i].Confirmed);
      }

      //  console.log("labels", labels);
      dispatch({
        type: "SET_COUNTRIES",
        payload: countries,
      });
      dispatch({
        type: "SET_CONFIRMED",
        payload: confirmed,
      });
    } catch (err) {
      console.log("Err", err);
    }
  };
};
